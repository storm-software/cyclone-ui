import { FixtureProvider } from "./provider";
export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <FixtureProvider>{children}</FixtureProvider>
      </body>
    </html>
  );
}
