import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import Ror from "@/containers/(services)/Ror/Ror";

export const metadata = createMetadata("ror");

const RorPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <Ror />
        </Main>
      </Suspense>
    </>
  );
};

export default RorPage;
