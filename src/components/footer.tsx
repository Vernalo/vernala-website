export function Footer() {
  return (
    <footer className="bg-forest border-t border-savanna/15">
      {/* Statement */}
      <div className="px-6 sm:px-10 lg:px-20 py-16 border-b border-white/8">
        <p className="font-display text-2xl sm:text-3xl text-cream/80 italic max-w-2xl leading-snug">
          "Languages carry memory.{" "}
          <span className="text-savanna not-italic">We carry languages.</span>"
        </p>
      </div>

      {/* Bottom bar */}
      <div className="px-6 sm:px-10 lg:px-20 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <a href="/" className="flex items-center">
            <img
              src="/images/vernala-logo.png"
              alt="Vernala"
              width={120}
              height={35}
              className="h-6 w-auto brightness-0 invert opacity-60 hover:opacity-90 transition-opacity"
            />
          </a>

          <nav className="flex items-center gap-6">
            {["Translate", "Languages", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs text-mist/50 hover:text-mist transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-xs text-mist/40">
            © {new Date().getFullYear()} Vernala
          </p>
        </div>
      </div>
    </footer>
  );
}
