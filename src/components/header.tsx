import { Button } from "@/components/ui/button";

interface HeaderProps {
  readonly onContactClick: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forest/90 backdrop-blur-md border-b border-savanna/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img
              src="/images/vernala-logo.png"
              alt="Vernala"
              width={140}
              height={40}
              className="h-8 w-auto brightness-0 invert opacity-90"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {(["Translate", "Languages", "Contact"] as const).map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-mist hover:text-cream text-sm tracking-wide transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-savanna group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <Button
            onClick={onContactClick}
            size="sm"
            className="bg-savanna hover:bg-savanna/80 text-forest font-semibold rounded-none px-5 border-0"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
}
