import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import NewContactUs from "@/containers/NewContactUs";

export const metadata = createMetadata("contact-us");

const ContactUsPage = () => {
  return (
    <div>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <NewContactUs />
        </Main>
      </Suspense>
    </div>
  );
};

export default ContactUsPage;
