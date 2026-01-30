import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-orange-200 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="flex items-center">
            <img
              src="/images/vernala-logo.png"
              alt="Vernala"
              width={120}
              height={35}
              className="h-7 w-auto"
            />
          </a>

          <p className="text-sm text-gray-600 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
            for Cameroonian languages
          </p>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Vernala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
