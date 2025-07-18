import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import ReactJs from "@/containers/(services)/ReactJs/ReactJs";

export const metadata = createMetadata("react-js");

const ReactJsPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <ReactJs />
        </Main>
      </Suspense>
    </>
  );
};

export default ReactJsPage;
