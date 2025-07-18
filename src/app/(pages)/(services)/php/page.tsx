import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import Php from "@/containers/(services)/Php/Php";

export const metadata = createMetadata("php");

const PhpPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <Php />
        </Main>
      </Suspense>
    </>
  );
};

export default PhpPage;
