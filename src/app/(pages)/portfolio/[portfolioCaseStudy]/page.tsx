import { getAllPortfolioCaseStudiesSlug, getPortfolioCaseStudySlug } from "@/constants/portfolioCaseStudy";
import Main from "@/layout/Main";
import { notFound } from "next/navigation";
import PortfolioCaseStudy from "@/containers/PortfolioCaseStudy";

export async function generateMetadata(
  { params }: { params: Promise<{ portfolioCaseStudy: string }> }
) {
  const resolvedParams = await params;
  const portfolioCaseStudyData = await getPortfolioCaseStudySlug(resolvedParams.portfolioCaseStudy);
  if (!portfolioCaseStudyData) {
    return {
      title: "Page Not Found",
      description: "The requested prefix term could not be found.",
    };
  }

  return {
    title: portfolioCaseStudyData?.title,
    description: portfolioCaseStudyData?.projectOverview,
  };
}

export async function generateStaticParams() {
  return await getAllPortfolioCaseStudiesSlug();
}

// ✅ CORRECTLY TYPED PARAMS
export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ portfolioCaseStudy: string }>;
}) {
  const resolvedParams = await params;
  const portfolioCaseStudyData = await getPortfolioCaseStudySlug(resolvedParams.portfolioCaseStudy);
  if (!portfolioCaseStudyData) {
    notFound();
  }

  return (
    <Main whyThoughtWinText={portfolioCaseStudyData?.whyThoughtWin}>
      <PortfolioCaseStudy params={portfolioCaseStudyData} />
    </Main>
  );
}
