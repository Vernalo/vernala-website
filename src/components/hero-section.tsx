import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-4 border-orange-400 rounded-full" />
        <div className="absolute bottom-40 right-20 w-48 h-48 border-4 border-red-400 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border-4 border-amber-500 rotate-45" />
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-4 border-orange-300 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Centered Logo */}
        <div className="flex items-center justify-center mb-8">
          <img
            src="/images/vernala-logo.png"
            alt="Vernala Logo"
            width={280}
            height={80}
            className="h-16 sm:h-20 w-auto"
          />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-8">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-sm text-orange-700 font-medium">
            Preserving Cameroonian Languages
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-balance">
          Translate English to{" "}
          <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
            Cameroonian Languages
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
          Preserve and share the beauty of Cameroonian languages. Vernala helps
          you translate English into Ngiemboon for now. More languages will be
          added soon.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 shadow-lg shadow-orange-500/25"
            asChild
          >
            <a href="#translate">Start Translating</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-white/50 border-orange-200 text-gray-800 hover:bg-white hover:border-orange-300"
            asChild
          >
            <a href="#languages">Explore Languages</a>
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 flex-wrap">
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-600">1</p>
            <p className="text-sm text-gray-600">Language</p>
          </div>
          <div className="w-px h-12 bg-orange-200 hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-600">1K+</p>
            <p className="text-sm text-gray-600">Words per Language</p>
          </div>
          <div className="w-px h-12 bg-orange-200 hidden sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-600">Cameroon</p>
            <p className="text-sm text-gray-600">Focused</p>
          </div>
        </div>
      </div>

      <a
        href="#translate"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-orange-400" />
      </a>
    </section>
  );
}
