import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import Flutter from "@/containers/(services)/Flutter";

export const metadata = createMetadata("flutter");

const FlutterPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <Flutter />
        </Main>
      </Suspense>
    </>
  );
};

export default FlutterPage;
