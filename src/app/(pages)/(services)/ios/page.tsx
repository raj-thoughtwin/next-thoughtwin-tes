import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import Ios from "@/containers/(services)/Ios";

export const metadata = createMetadata("react-native");

const IosPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <Ios />
        </Main>
      </Suspense>
    </>
  );
};

export default IosPage;
