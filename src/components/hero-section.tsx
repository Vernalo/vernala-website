export function HeroSection() {
  return (
    <section className="flex flex-col pt-24 pb-24 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      {/* Kente-inspired geometric pattern — right side */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none select-none">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="kente"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              {/* Outer diamond */}
              <path
                d="M30 2 L58 30 L30 58 L2 30 Z"
                fill="none"
                stroke="#C8920A"
                strokeWidth="0.6"
                opacity="0.25"
              />
              {/* Inner diamond */}
              <path
                d="M30 14 L46 30 L30 46 L14 30 Z"
                fill="none"
                stroke="#C1440E"
                strokeWidth="0.5"
                opacity="0.18"
              />
              {/* Corner accents */}
              <line x1="0" y1="0" x2="8" y2="8" stroke="#C8920A" strokeWidth="0.4" opacity="0.2" />
              <line x1="60" y1="0" x2="52" y2="8" stroke="#C8920A" strokeWidth="0.4" opacity="0.2" />
              <line x1="0" y1="60" x2="8" y2="52" stroke="#C8920A" strokeWidth="0.4" opacity="0.2" />
              <line x1="60" y1="60" x2="52" y2="52" stroke="#C8920A" strokeWidth="0.4" opacity="0.2" />
            </pattern>
            {/* Fade mask — pattern fades toward center */}
            <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="black" stopOpacity="1" />
              <stop offset="60%" stopColor="black" stopOpacity="0" />
            </linearGradient>
            <mask id="fadeMask">
              <rect width="100%" height="100%" fill="url(#fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#kente)" mask="url(#fadeMask)" />
        </svg>
      </div>

      {/* Vertical divider */}
      <div className="absolute right-1/2 top-0 bottom-0 w-px bg-savanna/8 hidden lg:block" />

      <div className="max-w-5xl relative z-10">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-10 animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          <div className="h-px w-10 bg-savanna" />
          <span className="text-savanna text-xs tracking-widest uppercase font-medium">
            Preserving Cameroonian Languages
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-cream leading-[0.92] mb-8 animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Translate
          <br />
          English to{" "}
          <em className="text-savanna not-italic">
            Cameroonian
            <br />
            Languages
          </em>
        </h1>

        {/* Description */}
        <p
          className="text-mist text-base sm:text-lg max-w-md mb-12 leading-relaxed animate-fade-up"
          style={{ animationDelay: "180ms" }}
        >
          Preserve and share the living languages of Cameroon. Vernala brings
          you word-by-word translations into Ngiemboon — with more languages
          coming.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-start gap-3 mb-16 animate-fade-up"
          style={{ animationDelay: "260ms" }}
        >
          <a
            href="#translate"
            className="inline-block px-8 py-3.5 bg-savanna text-forest font-semibold text-sm tracking-wide hover:bg-savanna/85 transition-colors"
          >
            Start Translating
          </a>
          <a
            href="#languages"
            className="inline-block px-8 py-3.5 text-cream text-sm tracking-wide border border-cream/20 hover:border-cream/50 hover:bg-cream/5 transition-colors"
          >
            Explore Languages
          </a>
        </div>

        {/* Language nameplate strip */}
        <div
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-mist animate-fade-up"
          style={{ animationDelay: "340ms" }}
        >
          <span className="text-[10px] tracking-widest uppercase text-mist/50 shrink-0">
            Languages
          </span>
          <div className="h-px w-5 bg-mist/30 shrink-0" />
          <span className="hover:text-cream transition-colors cursor-default">
            Ngiemboon
          </span>
          <span className="text-mist/30">·</span>
          <span className="hover:text-cream transition-colors cursor-default">
            Ghomala
          </span>
          <span className="text-mist/30">·</span>
          <span className="hover:text-cream transition-colors cursor-default">
            Bafut
          </span>
        </div>
      </div>

    </section>
  );
}
