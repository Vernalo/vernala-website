"use client";

import { useState, useEffect } from "react";
import {
  languages,
  translateWord,
  getWordCount,
  getTargetLanguages,
  getSourceLanguages,
  getExampleWords,
} from "@/lib/dictionary";

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

    // Small delay for UX feedback
    await new Promise((resolve) => setTimeout(resolve, 300));

    const result = translateWord(sourceText, sourceLanguage, targetLanguage);

    if (result) {
      setTranslatedText(result);
    } else {
      setTranslatedText(`Word "${sourceText.trim()}" not found in dictionary`);
    }

    setIsTranslating(false);
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
