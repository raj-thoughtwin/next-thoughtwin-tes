import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import Android from "@/containers/(services)/Android";

export const metadata = createMetadata("android");

const AndroidPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <Android />
        </Main>
      </Suspense>
    </>
  );
};

export default AndroidPage;
