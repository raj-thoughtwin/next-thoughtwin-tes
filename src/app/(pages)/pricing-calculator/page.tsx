import { Suspense } from "react";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import PricingCalculator from "@/containers/PricingCalculator";
import CostComparisonChart from "@/components/CostComparisonChart";

const PricingCalculatorPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <PricingCalculator />
        </Main>
      </Suspense>
    </>
  );
};

export default PricingCalculatorPage;
