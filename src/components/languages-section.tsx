import { MapPin } from "lucide-react";
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
    <section id="languages" className="py-24 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-[10px] tracking-widest uppercase text-savanna mb-3 block">
            Our Languages
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-cream mb-4">
            Cameroonian Languages
          </h2>
          <p className="text-mist text-sm max-w-md">
            Explore the living languages we support — preserving the rich
            linguistic heritage of Cameroon.
          </p>
        </div>

        {/* Editorial language list */}
        <div>
          {cameroonianLanguages.map((lang, i) => {
            const example = languageExamples[lang.code];
            return (
              <div
                key={lang.code}
                className="group border-t border-white/10 py-8 grid grid-cols-12 gap-x-6 gap-y-3 hover:bg-white/[0.02] transition-colors"
              >
                {/* Index */}
                <div className="col-span-1 pt-1">
                  <span className="text-[10px] text-mist/30 font-mono tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Language name + meta */}
                <div className="col-span-11 sm:col-span-4">
                  <h3 className="font-display text-3xl sm:text-4xl text-cream group-hover:text-savanna transition-colors leading-none mb-3">
                    {lang.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-mist/60">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {lang.region}
                    </span>
                    <span className="text-mist/30">·</span>
                    <span>{lang.speakers} speakers</span>
                  </div>
                </div>

                {/* Description */}
                <div className="col-span-11 sm:col-span-5 sm:col-start-6 flex items-center">
                  <p className="text-sm text-mist/70 leading-relaxed line-clamp-2">
                    {lang.description}
                  </p>
                </div>

                {/* Example translation */}
                {example && (
                  <div className="col-span-11 sm:col-span-2 sm:col-start-11 flex sm:flex-col sm:items-end items-center gap-2 sm:gap-0.5">
                    <span className="font-display text-lg text-savanna leading-none">
                      {example.translation}
                    </span>
                    <span className="text-[10px] text-mist/40 sm:mt-1">
                      "{example.english}"
                    </span>
                  </div>
                )}
              </div>
            );
          })}
          <div className="border-t border-white/10" />
        </div>

        {/* CTA */}
        <div className="mt-12">
          <p className="text-sm text-mist/60">
            Know another Cameroonian language?{" "}
            <a
              href="#contact"
              className="text-savanna hover:text-savanna/80 font-medium transition-colors underline underline-offset-4 decoration-savanna/30"
            >
              Help us add it
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
