import Link from "next/link";
import { connection } from "next/server";
import { Suspense } from "react";
import { Probe } from "./probe";
async function Dynamic() {
  await connection();
  await new Promise(resolve => setTimeout(resolve, 500));
  return (
    <section>
      <p>Request content</p>
      <Probe id="late-mode" />
    </section>
  );
}
async function Cached() {
  "use cache";
  return <h1>Static shell</h1>;
}
export default function Page() {
  return (
    <>
      <Cached />
      <Link href="/second">Second page</Link>
      <nav aria-label="Integration fixtures">
        <Link href="/composition">Server composition</Link>
        <Link href="/search?q=default">Default prefetch</Link>
        <Link href="/search?q=prefetched" prefetch={true}>
          Prefetch results
        </Link>
      </nav>
      <Probe />
      <Suspense fallback={<p>Loading request content</p>}>
        <Dynamic />
      </Suspense>
    </>
  );
}
