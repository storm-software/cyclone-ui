import { FixtureProvider } from "./provider";
export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:," />
      </head>
      <body>
        <FixtureProvider>{children}</FixtureProvider>
      </body>
    </html>
  );
}
