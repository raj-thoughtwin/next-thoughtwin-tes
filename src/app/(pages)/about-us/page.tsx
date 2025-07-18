import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import { mapCustomMetadataToNextMetadata } from "@/utility/mapCustomMetadataToNextMetadata";
import Main from "@/layout/Main";
import AboutUs from "@/containers/AboutUs";

export async function generateMetadata() {
  const customMetadata = await createMetadata("about-us");
  return mapCustomMetadataToNextMetadata(customMetadata);
}

const AboutUsPage = () => {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <AboutUs />
        </Main>
      </Suspense>
    </>
  );
};

export default AboutUsPage;
