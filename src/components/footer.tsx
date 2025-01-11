import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-safari-primary text-white">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-32 gap-4">
          <div className="flex justify-center items-center">
            <p>
              &copy; {new Date().getFullYear()} Roaring Good Safaris. All rights
              reserved.
            </p>
          </div>
          <nav className="flex flex-col md:flex-row justify-evenly items-center w-full px-4 md:px-8">
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
              href="/aboutUs"
              className="text-white hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
