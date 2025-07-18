import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import Portfolio from "@/containers/Portfolio";

export const metadata = createMetadata("portfolio");

export default function PortfoliosPage() {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <Portfolio />
        </Main>
      </Suspense>
    </>
  );
}
