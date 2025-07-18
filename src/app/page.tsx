import { Suspense } from "react";
import { createMetadata } from "@/utility/generateMetaData";
import LoadingLoader from "@/components/LoadingLoader";
import Main from "@/layout/Main";
import HomePage from "@/containers/Home";

export const metadata = createMetadata("home");

export default function Home() {
  return (
    <>
      <Suspense fallback={<LoadingLoader />}>
        <Main>
          <Suspense>
            <HomePage />
          </Suspense>
        </Main>
      </Suspense>
    </>
  );
}
