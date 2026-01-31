import { useState, useEffect } from "react";
import { getLanguages } from "@/lib/api-client";
import { toFrontendLanguageCode } from "@/lib/language-mapping";
import { languages as localLanguages } from "@/lib/dictionary";
import type { Language } from "@/lib/dictionary";
import type { LanguageInfo } from "@/types/api";

interface UseLanguagesReturn {
  languages: Language[];
  isLoading: boolean;
  error: string | null;
  wordCounts: Record<string, number>;
}

export function useLanguages(): UseLanguagesReturn {
  const [languages, setLanguages] = useState<Language[]>(localLanguages);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [wordCounts, setWordCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await getLanguages();

        // Create a map of word counts by frontend language code
        const counts: Record<string, number> = {};

        // Map API languages to frontend format and merge with local data
        const apiLanguageMap = new Map<string, LanguageInfo>();
        response.languages.forEach((lang) => {
          const frontendCode = toFrontendLanguageCode(lang.code);
          apiLanguageMap.set(frontendCode, lang);
          counts[frontendCode] = lang.word_count;
        });

        // Merge API data with local language definitions
        const mergedLanguages = localLanguages.map((localLang) => {
          const apiLang = apiLanguageMap.get(localLang.code);
          if (apiLang) {
            // Update type from API if available
            return {
              ...localLang,
              type: apiLang.type,
            };
          }
          return localLang;
        });

        setLanguages(mergedLanguages);
        setWordCounts(counts);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch languages from API:", err);
        setError("Failed to load languages from server");
        // Keep using local languages as fallback
        setLanguages(localLanguages);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLanguages();
  }, []);

  return {
    languages,
    isLoading,
    error,
    wordCounts,
  };
}
