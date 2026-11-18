import NextLink from "next/link";
import { BodyText } from "../../../../../../components/body-text/src";
import { Link } from "../../../../../../components/link/src";

// This stays a Server Component: the render element crosses the client boundary.
export default function Page() {
  return (
    <>
      <BodyText>
        Have an invitation?{" "}
        <Link href="/second" size="sm">
          Plain nested
        </Link>{" "}
        <Link render={<NextLink href="/second" />} size="sm">
          Rendered nested
        </Link>
      </BodyText>
      <Link href="/second" size="sm">
        Plain standalone
      </Link>{" "}
      <Link
        render={
          <NextLink href="/second" prefetch={false} replace scroll={false} />
        }
        size="sm">
        Rendered standalone
      </Link>
    </>
  );
}
