import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import Nodejs from "@/containers/(services)/NodeJs/NodeJs";

export const metadata = createMetadata("node-js");

const NodeJsPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <Nodejs />
        </Main>
      </Suspense>
    </>
  );
};

export default NodeJsPage;
