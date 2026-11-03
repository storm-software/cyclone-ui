import { connection } from "next/server";
import { Suspense } from "react";
import { axisValueToPercentFormatter } from "../../../../../../components/chart/src";
import {
  Footer,
  FooterContainer,
  FooterSectionFrame,
  FooterSectionTitle
} from "../../../../../../components/footer/src";
import {
  Page,
  PageMain,
  PageMainContent,
  PageMainHeader,
  PageTopNav,
  PageTopNavStart
} from "../../../../../../components/page/src";
import { LoadingChart, ShellNote } from "./loading-chart";

async function RequestContent() {
  await connection();
  await new Promise(resolve => setTimeout(resolve, 1500));
  return <p data-testid="composition-request">Composed request content</p>;
}

async function CachedContent() {
  "use cache";
  // A value helper imported alongside client components must remain callable
  // on the server, without pulling its interactive chart runtime into RSC.
  return <p>Cached server value: {axisValueToPercentFormatter(0.25)}</p>;
}

export default function Composition() {
  return (
    <Page>
      <PageTopNav>
        <PageTopNavStart>Server composed navigation</PageTopNavStart>
      </PageTopNav>
      <PageMain>
        <PageMainHeader>
          <h1>Server composed shell</h1>
        </PageMainHeader>
        <PageMainContent>
          <CachedContent />
          <LoadingChart />
          <ShellNote />
          <Suspense fallback={<p>Loading composed request</p>}>
            <RequestContent />
          </Suspense>
          <Footer>
            <FooterContainer>
              <FooterSectionFrame>
                <FooterSectionTitle>Server composed footer</FooterSectionTitle>
              </FooterSectionFrame>
            </FooterContainer>
          </Footer>
        </PageMainContent>
      </PageMain>
    </Page>
  );
}
