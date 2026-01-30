import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users } from "lucide-react";
import { languages } from "@/lib/dictionary";

const cameroonianLanguages = languages.filter(
  (lang) => !["english", "french"].includes(lang.code),
);

const languageExamples: Record<
  string,
  { english: string; translation: string }
> = {
  ghomala: { english: "Thank you", translation: "ŋkwə́tə́" },
  ngiemboon: { english: "Hello", translation: "mbwò" },
  bafut: { english: "Peace", translation: "ǹbɔ̀ŋ" },
};

export function LanguagesSection() {
  return (
    <section id="languages" className="py-24 px-4 bg-orange-100/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Cameroonian Languages
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore the Cameroonian languages we currently support, preserving
            the rich linguistic heritage of Cameroon
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cameroonianLanguages.map((lang) => {
            const example = languageExamples[lang.code];
            return (
              <Card
                key={lang.code}
                className="bg-white/80 backdrop-blur-sm border-orange-200 hover:border-orange-400 transition-colors group shadow-lg shadow-orange-500/5"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {lang.name}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {lang.region}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
                    <Users className="w-3 h-3" />
                    {lang.speakers} speakers
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {lang.description}
                  </p>

                  {example && (
                    <div className="pt-4 border-t border-orange-100">
                      <p className="text-xs text-gray-500 mb-1">Example:</p>
                      <p className="text-sm">
                        <span className="text-gray-900">{example.english}</span>
                        <span className="mx-2 text-gray-400">→</span>
                        <span className="text-orange-600 font-medium">
                          {example.translation}
                        </span>
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            {"Know another Cameroonian language? "}
            <a
              href="#contact"
              className="text-orange-600 hover:underline font-medium"
            >
              Help us add it
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
