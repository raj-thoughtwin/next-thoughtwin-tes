import { Suspense } from "react";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import SalesForce from "@/containers/(services)/SalesForce/SalesForce";

const SalesForcePage = () => {
  return (
    <div>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <SalesForce />
        </Main>
      </Suspense>
    </div>
  );
};

export default SalesForcePage;
