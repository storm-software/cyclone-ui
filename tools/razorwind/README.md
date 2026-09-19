# Cyclone UI - Internal Razorwind Plugin

An internal Razorwind plugin used in the Cyclone UI monorepo.

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

> [!IMPORTANT] 
> This is an internal Cyclone UI tooling package, and should not be used outside of the Cyclone UI monorepo. It is not intended for public consumption, and may change or be removed at any time without notice. 

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

Rules for Razorwind plugin:

1. when in dark mode, a color is considered light if isWhiteColor is true
2. when in light mode, a color is considered dark if isBlackColor is true
3. when increasing brightness, dark colors should become lighter and light colors should become darker and vice-versa
4. the hover state should make a color 30% brighter than its original color
5. the active state should make a color 15% brighter than its original color
6. the inactive state should make a color 20% less bright than its original color
