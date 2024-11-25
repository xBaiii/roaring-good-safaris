import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-safari-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Roaring Good Safaris</h3>
            <p className="mb-6">
              Experience the wild with our unforgettable safari adventures.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <Facebook size={28} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <Instagram size={28} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <Twitter size={28} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-white hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/itinerary"
                className="text-white hover:text-primary transition-colors"
              >
                Itinerary
              </Link>
              <Link
                href="/#gallery"
                className="text-white hover:text-primary transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p>
            &copy; {new Date().getFullYear()} Roaring Good Safaris. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
