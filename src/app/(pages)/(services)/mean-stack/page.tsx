import { Suspense } from "react";
import dynamic from "next/dynamic";
import LoadingLoader from "@/components/LoadingLoader";
import MeanStack from "@/containers/(services)/MeanStack";
import Main from "@/layout/Main";

// const MeanStack = dynamic(() => import("@/containers/(services)/MeanStack/MeanStack"), {
//   ssr: false,
//   loading: () => <LoadingLoader />,
// });

import { createMetadata } from "@/utility/generateMetaData";

export const metadata = createMetadata("mean-stack");

const MeanStackPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <MeanStack />
        </Main>
      </Suspense>
    </>
  );
};

export default MeanStackPage;
