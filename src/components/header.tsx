import { Button } from "@/components/ui/button";

interface HeaderProps {
  readonly onContactClick: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-amber-50/80 backdrop-blur-md border-b border-orange-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center">
            <img
              src="/images/vernala-logo.png"
              alt="Vernala"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#translate"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Translate
            </a>
            <a
              href="#languages"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Languages
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </nav>

          <Button
            onClick={onContactClick}
            size="sm"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </header>
  );
}
