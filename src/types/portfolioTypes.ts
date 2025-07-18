import { StaticImageData } from "next/image";

export interface PortfolioContent {
    need: string[];
    solution?: string[];
    outcome?: string[];
}

export interface PortfolioItem {
    id: number;
    title: string;
    subtitle: string;
    image: StaticImageData;
    isTab: string;
    link?: string;
}
