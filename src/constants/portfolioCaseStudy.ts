import portfolioCaseStudyData from "../../public/assets/json/portfolioCaseStudies.json";
import { PortfolioCaseStudy } from '@/types/types';

export const AllPortfolioCaseStudies = portfolioCaseStudyData as PortfolioCaseStudy[];

export const getPortfolioCaseStudySlug = async (portfolioCaseStudy: string): Promise<PortfolioCaseStudy | null> => {
    return AllPortfolioCaseStudies.find((t) => t.uniqueField === portfolioCaseStudy) || null;
};
export const getAllPortfolioCaseStudiesSlug = async (): Promise<{ portfolioCaseStudy: string }[]> => {
    const portfolioCaseStudy = AllPortfolioCaseStudies.map((portfolioCaseStudy: PortfolioCaseStudy) => ({
        portfolioCaseStudy: portfolioCaseStudy.uniqueField,
    }));
    return portfolioCaseStudy;
};
