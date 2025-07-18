import makeData from "../../public/assets/json/prefixTermMake.json"
import prefixTermData from '../../public/assets/json/prefixTerm.json';
import { Make, PrefixTerm } from '@/types/types';

export const AllMakes: Make[] = makeData as Make[];

export const getPrefixesSlug = async (Make: string): Promise<Make | null> => {
    return AllMakes.find((t) => t.uniqueField === Make) || null;
};

export const AllPrefixTerms: PrefixTerm[] = prefixTermData as PrefixTerm[];

export const getPrefixTermsSlug = async (prefixTerm: string): Promise<PrefixTerm | null> => {
    return AllPrefixTerms.find((t) => t.uniqueField === prefixTerm) || null;
};
export const getAllPrefixesSlug = async (): Promise<{ term: string; make: string }[]> => {
  const slugCombinations: { term: string; make: string }[] = [];
  const seen = new Set<string>();

  AllPrefixTerms.forEach((prefixTerm) => {
    AllMakes.forEach((make) => {
      const key = `${prefixTerm.uniqueField}#${make.uniqueField}`;
      if (!seen.has(key)) {
        slugCombinations.push({
          term: prefixTerm.uniqueField,
          make: make.uniqueField,
        });
        seen.add(key);
      }
    });
  });

  return slugCombinations;
};
