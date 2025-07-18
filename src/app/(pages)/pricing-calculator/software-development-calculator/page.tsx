import { Suspense } from "react";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import SoftwareDevelopmentCalculator from "@/containers/(calculator)/SoftwareDevelopmentCalculator/SoftwareDevelopmentCalculator";

const SoftwareDevelopmentCalculatorPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <SoftwareDevelopmentCalculator />
        </Main>
      </Suspense>
    </>
  );
};

export default SoftwareDevelopmentCalculatorPage;
