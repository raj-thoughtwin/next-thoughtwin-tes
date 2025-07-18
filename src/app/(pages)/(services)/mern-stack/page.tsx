import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import MernStack from "@/containers/(services)/MernStack/MernStack";

export const metadata = createMetadata("mern-stack");

const MernStackPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <MernStack />
        </Main>
      </Suspense>
    </>
  );
};

export default MernStackPage;
