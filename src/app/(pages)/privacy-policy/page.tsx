import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import PrivacyPolicy from "@/containers/PrivacyPolicy";

export const metadata = createMetadata("our-team");

const PrivacyPoliyPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <PrivacyPolicy />
        </Main>
      </Suspense>
    </>
  );
};

export default PrivacyPoliyPage;
