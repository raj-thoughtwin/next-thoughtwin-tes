import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import OurTeam from "@/containers/OurTeam";

export const metadata = createMetadata("our-team");

const OurTeamPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <OurTeam />
        </Main>
      </Suspense>
    </>
  );
};

export default OurTeamPage;
