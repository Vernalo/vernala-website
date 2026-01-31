import { useState, useEffect } from "react";
import {
  languages,
  translateWord as translateWordLocal,
  getWordCount,
  getTargetLanguages,
  getSourceLanguages,
  getExampleWords,
} from "@/lib/dictionary";
import { translateWord as translateWordApi } from "@/lib/api-client";
import { toApiLanguageCode } from "@/lib/language-mapping";
import type { ApiError } from "@/types/api";

export function useTranslation() {
  const [sourceText, setSourceText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("english");
  const [targetLanguage, setTargetLanguage] = useState("bafut");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  // Get available languages based on rules
  const sourceLanguages = getSourceLanguages();
  const targetLanguages = getTargetLanguages(sourceLanguage);

  // Derive target language when source changes (if current target is not allowed)
  const derivedTargetLanguage = (() => {
    const allowedTargets = getTargetLanguages(sourceLanguage);
    if (!allowedTargets.some((l) => l.code === targetLanguage)) {
      // Return first allowed target
      return allowedTargets.length > 0
        ? allowedTargets[0].code
        : targetLanguage;
    }
    return targetLanguage;
  })();

  // Update target language state when derived value changes
  useEffect(() => {
    setTargetLanguage(derivedTargetLanguage);
  }, [derivedTargetLanguage]);

  // Clear translation when languages change
  useEffect(() => {
    setTranslatedText("");
  }, [sourceLanguage, derivedTargetLanguage]);

  const translate = async () => {
    if (!sourceText.trim()) return;

    setIsTranslating(true);

    try {
      const response = await translateWordApi({
        source: toApiLanguageCode(sourceLanguage),
        word: sourceText.trim(),
        match: "exact",
        limit: 10,
      });

      if (response.results && response.results.length > 0) {
        if (response.results.length === 1) {
          setTranslatedText(response.results[0].target_word);
        } else {
          const translations = response.results
            .map((result, index) => `${index + 1}. ${result.target_word}`)
            .join("\n");
          setTranslatedText(translations);
        }
      } else {
        setTranslatedText(
          `Word "${sourceText.trim()}" not found in dictionary`,
        );
      }
    } catch (error) {
      console.error("Translation error:", error);

      const apiError = error as ApiError;
      if (apiError.message) {
        setTranslatedText(`Error: ${apiError.message}`);
      } else {
        console.warn("API failed, falling back to local dictionary");
        const result = translateWordLocal(
          sourceText,
          sourceLanguage,
          targetLanguage,
        );

        if (result) {
          setTranslatedText(result);
        } else {
          setTranslatedText(
            `Word "${sourceText.trim()}" not found in dictionary`,
          );
        }
      }
    } finally {
      setIsTranslating(false);
    }
  };

  const selectedSourceLanguage = languages.find(
    (l) => l.code === sourceLanguage,
  );
  const selectedTargetLanguage = languages.find(
    (l) => l.code === targetLanguage,
  );
  const wordCount = getWordCount(sourceLanguage, targetLanguage);
  const exampleWords = getExampleWords(sourceLanguage);

  return {
    sourceText,
    setSourceText,
    sourceLanguage,
    setSourceLanguage,
    targetLanguage,
    setTargetLanguage,
    translatedText,
    setTranslatedText,
    isTranslating,
    translate,
    sourceLanguages,
    targetLanguages,
    selectedSourceLanguage,
    selectedTargetLanguage,
    wordCount,
    exampleWords,
  };
}
