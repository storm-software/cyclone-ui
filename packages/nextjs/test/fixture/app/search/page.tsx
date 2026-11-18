import { connection } from "next/server";
import { Suspense } from "react";

async function CachedResults({ query }: { query: string }) {
  "use cache";
  return <p data-testid="search-results">Results for {query}</p>;
}

async function Results({ searchParams }) {
  const { q = "" } = await searchParams;
  return <CachedResults query={String(q)} />;
}

async function FreshContent() {
  await connection();
  return <p data-testid="search-request">Fresh search content</p>;
}

export default function Search({ searchParams }) {
  return (
    <main data-testid="search-page">
      <h1>Search shell</h1>
      <Suspense fallback={<p>Loading results</p>}>
        <Results searchParams={searchParams} />
      </Suspense>
      <Suspense fallback={<p>Loading fresh content</p>}>
        <FreshContent />
      </Suspense>
    </main>
  );
}
