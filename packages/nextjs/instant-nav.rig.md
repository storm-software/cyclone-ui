# Production navigation verification

This package is a framework integration and component library. The public fixture
under `test/fixture` provides representative routes; it has no authentication,
external services, mutable data, or application-specific cache policy.

## Run

From the repository root:

```sh
devenv shell -- pnpm --filter @cyclone-ui/nextjs exec playwright test
```

Install the Playwright Chromium browser first, or set `CHROMIUM_PATH` to an
available executable. If the development environment's automatic package install
tries to reinstall already verified dependencies, disable only that hook:

```sh
devenv -O languages.javascript.pnpm.install.enable:bool false shell -- pnpm --filter @cyclone-ui/nextjs exec playwright test
```

The Playwright web server runs `test/production-server.mjs`, builds the local
fixture with Next.js 16.4.4, and serves the new artifact on port 3197. A listener
already using that port is an error; `reuseExistingServer` is disabled. Playwright
owns the server process group and cleanup. Builds and tests are awaited. There is
no remote artifact or separate deployment liveness check.

The runner enables `EXPOSE_TESTING_API=1` for **both build and start**. The fixture
config gates `experimental.exposeTestingApiInProductionBuild` on that variable.
This version reloads the config at startup, so omitting it from the server process
disables the document lock despite its presence in the build artifact. Never
enable this API for a user-facing production deployment.

## Contracts

- Initial `/`: the heading, provider/theme script, styles and request-content
  fallback are available; request content waits for the lock to release.
- `/` → “Second page” → `/second`: the destination shell and fallback are
  visible while fresh request content waits. Scope assertions to the destination
  because React may retain hidden content from the source route.
- Initial `/composition`: flat Page and Footer slots are rendered from a Server
  Component; a neutral chart formatter executes in a cached Server Component.
  Their visible shell renders before fresh content. Theme changes hydrate cleanly.
  A separate normal-streaming check preserves typed input and focus when fresh
  content arrives; the testing API's hard-load release refreshes the route, so
  that artificial refresh is not used to measure client state preservation.
- Initial `/calendar-probe`: the surrounding shell prerenders with the calendar's
  sized loading fallback in its static HTML. The current-date calendar resolves
  and becomes interactive after hydration, without blocking the page shell.
- Initial `/charts-probe`: loading and loaded BarChart and ComposedChart variants
  build and hydrate without render-time clock errors or random SVG mismatches.
  Loaded variants exercise the normal bar-grow animation path.
- `/` → “Default prefetch” → `/search?q=default`: the shared search shell is
  prefetched; URL-dependent results and fresh content wait for navigation.
- `/` → “Prefetch results” → `/search?q=prefetched`: `prefetch={true}` includes
  the cached URL-dependent results; fresh content still waits. This is a fixture
  policy, not a default imposed on Cyclone links or consuming applications.
- The existing theme regression script verifies persisted light/dark preferences,
  forced themes, system changes, cookies, delayed hydration, navigation, and
  first-paint CSS with hydration bundles blocked.

The fixtures use immutable inline data with the framework's default cache profile;
there are no writers to invalidate. Reusable production data must use a lifetime
and invalidation policy selected by its owning application.

## Trust and iteration

Use `instant()` from `@next/playwright` on the same release as `next`. Every locked
test with deferred content asserts that it is absent during the lock and present
after release. A missing testing API therefore fails the test. Tests have no
retries, timing budgets or manual prefetch warming.

Confirm the same direct load or link reaches its completed destination without
the lock when authoring a new contract, then remove that temporary scaffold.
Rebuild after any source or config change. Compare the locked result with only
the relevant export/boundary/prefetch change removed, then reapply and run the
complete suite. Do not manufacture failures by disabling unrelated prefetching.

Test context: public; no authentication, feature flags, account roles, localization
or seeded database. Browser contexts are fresh per test and default to a light
system preference. The theme script explicitly seeds saved dark mode. Known drift:
none for these fixture contracts. These tests verify source integration, not a
published package installed by the Cyclone CLI or every consuming application's
routes. Inspect package builds separately for preserved client directives.

Verified differentials: Calendar's original render-time current-date read and
the original chart mount timestamps fail production prerendering. Restoring
their boundaries and effect-based timestamps allows the fixture to build. Removing
only `prefetch={true}` from “Prefetch results” leaves the shared search shell
available, but the cached URL results assertion fails under the lock. Restoring
that link policy restores the passing contract. Unlocked checks for both search
links and the composition route reached their completed UI before the temporary
baseline tests were removed.
