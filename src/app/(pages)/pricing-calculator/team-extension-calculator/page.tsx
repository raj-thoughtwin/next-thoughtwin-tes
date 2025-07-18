import { Suspense } from "react";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import TeamExtensionCalculator from "@/containers/(calculator)/TeamExtensionCalculator/TeamExtensionCalculator";

const TeamExtensionCalculatorPage = () => {
  return (
    <Suspense fallback={<LoadingLoader />}>
      <Main>
        <TeamExtensionCalculator />
      </Main>
    </Suspense>
  );
};

export default TeamExtensionCalculatorPage;
