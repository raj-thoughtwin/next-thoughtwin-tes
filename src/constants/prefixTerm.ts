import prefixTermData from "../../public/assets/json/prefixTerm.json";
import { PrefixTerm } from '@/types/types';

export const AllPrefixTerms: PrefixTerm[] = prefixTermData as PrefixTerm[];

export const getPrefixTermsSlug = async (prefixTerm: string): Promise<PrefixTerm | null> => {
    return AllPrefixTerms.find((t) => t.uniqueField === prefixTerm) || null;
};
export const getAllPrefixTermsSlug = async (): Promise<{ term: string }[]> => {
    const prefixTerm = AllPrefixTerms.map((prefixTerm: PrefixTerm) => ({
        term: prefixTerm.uniqueField,
    }));
    return prefixTerm;
};
