import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, ArrowLeftRight, Copy, Loader2, Plus } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguages } from "@/hooks/use-languages";
import { useToast } from "@/hooks/use-toast";
import { translationRules } from "@/lib/dictionary";

export function Translator() {
  const { wordCounts } = useLanguages();

  const {
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
    wordCount,
    exampleWords,
  } = useTranslation({ apiWordCounts: wordCounts });

  const { toast } = useToast();

  const hasTranslation =
    translatedText && !translatedText.includes("not found");

  const handleCopy = async () => {
    if (hasTranslation) {
      await navigator.clipboard.writeText(translatedText);
      toast({
        title: "Copied!",
        description: "Translation copied to clipboard",
      });
    }
  };

  const canSwap =
    translationRules[targetLanguage]?.includes(sourceLanguage) ?? false;

  const handleSwap = () => {
    if (canSwap) {
      const newSource = targetLanguage;
      const newTarget = sourceLanguage;
      const newSourceText = hasTranslation ? translatedText : "";

      setSourceLanguage(newSource);
      setTargetLanguage(newTarget);
      setSourceText(newSourceText);
      setTranslatedText("");
    }
  };

  return (
    <section id="translate" className="py-24 px-6 sm:px-10 lg:px-20 bg-canopy/40">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <span className="text-[10px] tracking-widest uppercase text-savanna mb-3 block">
            Translation
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-cream mb-3">
            Word Translation
          </h2>
          <p className="text-mist text-sm max-w-md">
            Translate words between English, French, and Cameroonian languages
          </p>
        </div>

        {/* Translator panel */}
        <div className="border border-white/10 overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Source Language */}
            <div className="p-6 bg-bark/60">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <Select
                    value={sourceLanguage}
                    onValueChange={setSourceLanguage}
                  >
                    <SelectTrigger className="w-[160px] bg-transparent border-white/20 text-cream rounded-none h-8 text-sm">
                      <SelectValue placeholder="Source" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      {sourceLanguages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <span className="text-[10px] text-savanna/70 tracking-widest uppercase">
                    Source
                  </span>
                </div>
              </div>

              <Textarea
                placeholder={`Enter a word in ${selectedSourceLanguage?.name || "source language"}`}
                className="h-36 text-lg bg-transparent border-0 border-b border-white/15 text-cream placeholder:text-mist/40 focus-visible:ring-0 focus-visible:border-savanna/50 resize-none rounded-none transition-colors"
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey && sourceText.trim()) {
                    e.preventDefault();
                    translate();
                  }
                }}
              />

              <div className="mt-4">
                <p className="text-xs text-mist/50">
                  Try:{" "}
                  <span className="text-mist/70">
                    {exampleWords.slice(0, 5).join(", ")}
                  </span>
                </p>
              </div>
            </div>

            {/* Target Language */}
            <div className="p-6 bg-canopy/60">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <Select
                    value={targetLanguage}
                    onValueChange={setTargetLanguage}
                  >
                    <SelectTrigger className="w-[160px] bg-transparent border-white/20 text-cream rounded-none h-8 text-sm">
                      <SelectValue placeholder="Target" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      {targetLanguages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {wordCount > 0 && (
                    <span className="text-[10px] text-mist/50 tracking-wide">
                      {wordCount} words
                    </span>
                  )}
                </div>

                <button
                  onClick={handleCopy}
                  disabled={!hasTranslation}
                  className="text-mist/40 hover:text-savanna disabled:opacity-20 transition-colors p-1"
                  aria-label="Copy translation"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              <div className="h-36 flex items-start pt-2 border-b border-white/15">
                {isTranslating ? (
                  <span className="text-mist/50 text-lg flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Translating…
                  </span>
                ) : hasTranslation ? (
                  <span className="font-display text-2xl sm:text-3xl text-cream leading-tight">
                    {translatedText}
                  </span>
                ) : translatedText ? (
                  <span className="text-mist/50 text-sm italic">
                    {translatedText}
                  </span>
                ) : (
                  <span className="text-mist/30 text-lg">
                    Translation will appear here…
                  </span>
                )}
              </div>

              <div className="mt-4">
                <p className="text-xs text-mist/50">
                  Press Enter or click Translate
                </p>
              </div>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="px-6 py-4 border-t border-white/10 bg-forest/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handleSwap}
              disabled={!canSwap}
              className="flex items-center gap-2 text-mist/60 hover:text-cream disabled:opacity-20 disabled:cursor-not-allowed text-sm transition-colors"
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              Swap Languages
            </button>

            <Button
              size="default"
              onClick={translate}
              disabled={!sourceText.trim() || isTranslating}
              className="px-10 bg-savanna hover:bg-savanna/85 text-forest font-semibold rounded-none border-0 transition-colors"
            >
              {isTranslating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Translating…
                </>
              ) : (
                <>
                  Translate
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>

          {/* Contribute */}
          <div className="px-6 py-3 border-t border-white/8 bg-forest/30">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs">
              <span className="text-mist/50">Know the translation for a word?</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-savanna/80 hover:text-savanna font-medium transition-colors"
              >
                <Plus className="w-3 h-3" />
                Contribute a word
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
