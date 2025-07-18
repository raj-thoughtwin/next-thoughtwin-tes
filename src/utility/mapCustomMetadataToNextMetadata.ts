
import { CustomMetadata } from "@/types/CustomMetaDataTypes";
import type { Metadata } from "next";

export function mapCustomMetadataToNextMetadata(meta: CustomMetadata): Metadata {
    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        metadataBase: new URL(meta.website),
        alternates: {
            canonical: meta.canonical,
        },
        openGraph: meta.openGraph
            ? {
                title: meta.openGraph.title,
                description: meta.openGraph.description,
                url: meta.openGraph.url,
                images: meta.openGraph.images.map((img) => ({
                    url: img,
                })),
                locale: meta.openGraph.locale || "en_US",
                type: (meta.openGraph.type || "website"),
            }
            : undefined,
        twitter: meta.twitter
            ? {
                card: (meta.twitter.card ?? "summary_large_image"),
                title: meta.twitter.title,
                description: meta.twitter.description,
                images: meta.twitter.image ? [meta.twitter.image] : undefined,
                site: meta.twitter.site,
                creator: meta.twitter.creator,
            }
            : undefined,
        verification:
            meta.verification && (meta.verification.google || meta.verification.ahrefs)
                ? {
                    google: meta.verification.google,
                    other: meta.verification.ahrefs
                        ? { ahrefs: meta.verification.ahrefs as string }
                        : undefined,
                }
                : undefined,
        icons: {
            icon: meta.favicon,
        },
    };
}

