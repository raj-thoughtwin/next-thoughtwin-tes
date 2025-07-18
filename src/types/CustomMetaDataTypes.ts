type OpenGraphType =
    | "website"
    | "article"
    | "book"
    | "profile"
    | "music.song"
    | "music.album"
    | "music.playlist"
    | "music.radio_station"
    | "video.movie"
    | "video.episode"
    | "video.tv_show"
    | "video.other";

type TwitterCardType = "summary" | "summary_large_image" | "player" | "app";

export interface CustomMetadata {
    title: string;
    description: string;
    keywords: string[];
    website: string;
    verification?: {
        google?: string;
        ahrefs?: string;
    };
    openGraph?: {
        title: string;
        description: string;
        url: string;
        images: string[];
        locale?: string;
        type?: OpenGraphType;
    };
    twitter: {
        card: TwitterCardType;
        title: string;
        description: string;
        image: string;
        site?: string;
        // handle: string;
        creator?: string;
    };
    canonical: string;
    favicon: string;
}
