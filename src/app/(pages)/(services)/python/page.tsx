import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import Python from "@/containers/(services)/Python/Python";

export const metadata = createMetadata("python");

const PythonPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <Python />
        </Main>
      </Suspense>
    </>
  );
};

export default PythonPage;
