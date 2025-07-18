import { getAllPrefixesSlug, getPrefixesSlug, getPrefixTermsSlug } from "@/constants/make"
import Main from "@/layout/Main"
import Term from "@/containers/Term"
import { notFound } from "next/navigation"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ prefixTerm: string; make: string }>
}) {
  const { prefixTerm, make } = await params
  return {
    title: `${prefixTerm} Term Solutions Using ${make} | Thoughtwin`,
    description: `Thoughtwin delivers end-to-end ${prefixTerm} for ${prefixTerm} using ${make} scalable, secure, and future-ready. Partner with top-tier developers today.`,
  }
}

export async function generateStaticParams() {
  const paths = await getAllPrefixesSlug()
  return paths.map(({ term, make }) => ({
    prefixTerm: term,
    make,
  }))
}

export default async function TermPage({
  params,
}: {
  params: Promise<{ prefixTerm: string; make: string }>
}) {
  const { prefixTerm, make } = await params

  const prefixData = await getPrefixTermsSlug(prefixTerm)
  const makeData = await getPrefixesSlug(make)

  try {
    // JSON.stringify(prefixData)
    JSON.stringify(makeData)
  } catch (err) {
    console.error("Circular structure detected!", err)
  }

  if (!makeData) {
    notFound()
  }

  return (
    <Main>
      <Term params={{ makeData }} />
    </Main>
  )
}
