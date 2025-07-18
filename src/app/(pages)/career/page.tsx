import { client } from "@/lib/contentful";
import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import Careers from "@/containers/Careers";
import { CareersJobPosting } from "@/types/types";

export const metadata = createMetadata("career");

export default async function CareerPage() {
  const res = await client.getEntries({ content_type: "jobPost" });
  const jobs: CareersJobPosting[] = res.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title,
    location: item.fields.location,
    experience: item.fields.experience,
    position: item.fields.position,
    description: item.fields.description,
  }));

  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <Careers jobPostings={jobs} />
        </Main>
      </Suspense>
    </>
  );
}
