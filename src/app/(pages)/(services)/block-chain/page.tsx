import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import BlockChain from "@/containers/(services)/BlockChain";

export const metadata = createMetadata("block-chain");

const BlockChainPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <BlockChain />
        </Main>
      </Suspense>
    </>
  );
};

export default BlockChainPage;
