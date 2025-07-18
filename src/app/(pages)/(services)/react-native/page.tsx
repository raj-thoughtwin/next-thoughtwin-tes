import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import ReactNative from "@/containers/(services)/ReactNative/ReactNative";

export const metadata = createMetadata("react-native");

const ReactNativePage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <ReactNative />
        </Main>
      </Suspense>
    </>
  );
};

export default ReactNativePage;
