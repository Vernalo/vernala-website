import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeftRight, Copy, Loader2, Plus } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useToast } from "@/hooks/use-toast";
import { translationRules } from "@/lib/dictionary";

export function Translator() {
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
  } = useTranslation();

  const { toast } = useToast();

  const getTextareaClass = () => {
    if (isTranslating) {
      return "text-gray-400";
    }
    if (translatedText && !translatedText.includes("not found")) {
      return "text-gray-900 font-medium";
    }
    return "text-gray-400";
  };

  const handleCopy = async () => {
    if (translatedText && !translatedText.includes("not found")) {
      await navigator.clipboard.writeText(translatedText);
      toast({
        title: "Copied!",
        description: "Translation copied to clipboard",
      });
    }
  };

  // Check if swap is possible: target can be a source, and source is in target's allowed targets
  const canSwap =
    translationRules[targetLanguage]?.includes(sourceLanguage) ?? false;

  // Swap languages if possible
  const handleSwap = () => {
    if (canSwap) {
      const newSource = targetLanguage;
      const newTarget = sourceLanguage;
      const newSourceText =
        translatedText && !translatedText.includes("not found")
          ? translatedText
          : "";

      setSourceLanguage(newSource);
      setTargetLanguage(newTarget);
      setSourceText(newSourceText);
      setTranslatedText("");
    }
  };

  return (
    <section id="translate" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Word Translation
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Translate words between English, French, and Cameroonian languages
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm border-orange-200 overflow-hidden shadow-xl shadow-orange-500/10">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-orange-100">
              {/* Source Language */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Select
                      value={sourceLanguage}
                      onValueChange={setSourceLanguage}
                    >
                      <SelectTrigger className="w-[160px] bg-white border-orange-200 text-gray-900">
                        <SelectValue placeholder="Source" />
                      </SelectTrigger>
                      <SelectContent>
                        {sourceLanguages.map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>
                            {lang.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span className="text-xs text-orange-700 bg-orange-100 px-2 py-0.5 rounded">
                      Source
                    </span>
                  </div>
                </div>

                <Textarea
                  placeholder={`Enter a word in ${selectedSourceLanguage?.name || "source language"}`}
                  className="h-32 text-lg bg-orange-50/50 border-orange-200 text-gray-900 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-orange-400 resize-none"
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
                  <p className="text-xs text-gray-500">
                    Try: {exampleWords.slice(0, 5).join(", ")}
                  </p>
                </div>
              </div>

              {/* Target Language */}
              <div className="p-6 bg-orange-50/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Select
                      value={targetLanguage}
                      onValueChange={setTargetLanguage}
                    >
                      <SelectTrigger className="w-[160px] bg-white border-orange-200 text-gray-900">
                        <SelectValue placeholder="Target" />
                      </SelectTrigger>
                      <SelectContent>
                        {targetLanguages.map((lang) => (
                          <SelectItem key={lang.code} value={lang.code}>
                            {lang.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {wordCount > 0 && (
                      <span className="text-xs text-gray-500">
                        {wordCount} words
                      </span>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCopy}
                    disabled={
                      !translatedText || translatedText.includes("not found")
                    }
                    className="text-gray-500 hover:text-gray-900 hover:bg-orange-100"
                  >
                    <Copy className="w-4 h-4" />
                    <span className="sr-only">Copy translation</span>
                  </Button>
                </div>

                <Textarea
                  readOnly
                  placeholder="Translation will appear here..."
                  className={`h-32 text-lg bg-white border-orange-200 resize-none focus-visible:ring-0 ${getTextareaClass()}`}
                  value={
                    isTranslating ? "Translating..." : translatedText || ""
                  }
                />

                <div className="mt-4">
                  <p className="text-xs text-gray-500">
                    Press Enter or click Translate
                  </p>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="p-4 border-t border-orange-100 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleSwap}
                disabled={!canSwap}
                className="border-orange-200 text-gray-700 hover:bg-orange-100 hover:text-gray-900 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeftRight className="w-4 h-4 mr-2" />
                Swap Languages
              </Button>

              <Button
                size="lg"
                onClick={translate}
                disabled={!sourceText.trim() || isTranslating}
                className="px-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/25"
              >
                {isTranslating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Translating...
                  </>
                ) : (
                  <>
                    Translate
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>

            {/* Contribute Section */}
            <div className="p-4 border-t border-orange-100 bg-orange-50/30">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
                <span className="text-gray-600">
                  Know the translation for a word?
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium hover:underline"
                >
                  <Plus className="w-4 h-4" />
                  Contribute a word
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
