import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import Angular from "@/containers/(services)/Angular";

export const metadata = createMetadata("angular-js");

const AngularPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <Angular />
        </Main>
      </Suspense>
    </>
  );
};

export default AngularPage;
