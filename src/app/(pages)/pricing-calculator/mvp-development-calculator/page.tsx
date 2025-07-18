import { Suspense } from "react";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import MVPDevelopmentCalculator from "@/containers/(calculator)/MVPDevelopmentCalculator/MVPDevelopmentCalculator";

const MVPDevelopmentCalculatorPage = () => {
  return (
    <Suspense fallback={<LoadingLoader />}>
      <Main>
        <MVPDevelopmentCalculator />
      </Main>
    </Suspense>
  );
};

export default MVPDevelopmentCalculatorPage;
