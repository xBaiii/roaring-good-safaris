"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-safari-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link className="text-xl font-bold text-primary-foreground" href="/">
            Roaring Good Safaris
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === "/"
                    ? "bg-safari-secondary text-secondary-foreground"
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                }`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === "/itinerary"
                    ? "bg-safari-secondary text-secondary-foreground"
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                }`}
                href="/itinerary"
              >
                Itinerary
              </Link>
              <Link
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === "/contact"
                    ? "bg-safari-secondary text-secondary-foreground"
                    : "text-primary-foreground hover:bg-primary-foreground/10"
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
