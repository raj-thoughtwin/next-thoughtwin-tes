import { getAllPrefixTermsSlug, getPrefixTermsSlug } from "@/constants/prefixTerm";
import Main from "@/layout/Main";
import Term from "@/containers/Term";
import { notFound } from "next/navigation";

export async function generateMetadata(
  { params }: { params: Promise<{ prefixTerm: string }> }
) {
  const resolvedParams = await params;
  const prefixTermData = await getPrefixTermsSlug(resolvedParams.prefixTerm);
  if (!prefixTermData) {
    return {
      title: "Page Not Found",
      description: "The requested prefix term could not be found.",
    };
  }
  const termTitle = String(prefixTermData?.Prefix ?? "Term");
  const prefix = String(prefixTermData?.Prefix ?? "Prefix");

  return {
    title: `${termTitle} Make Solutions Using Make | Thoughtwin`,
    description: `Thoughtwin delivers end-to-end ${termTitle} for ${prefix} using Make scalable, secure, and future-ready. Partner with top-tier developers today.`,
  };
}

export async function generateStaticParams() {
  return await getAllPrefixTermsSlug();
}

// ✅ CORRECTLY TYPED PARAMS
export default async function TermPage({
  params,
}: {
  params: Promise<{ prefixTerm: string }>;
}) {
  const resolvedParams = await params;
  const prefixTermData = await getPrefixTermsSlug(resolvedParams.prefixTerm);
  if (!prefixTermData) {
    notFound();
  }

  return (
    <Main>
      <Term params={prefixTermData} />
    </Main>
  );
}
