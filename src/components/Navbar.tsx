"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Itinerary", href: "/itinerary" },
  { name: "Gallery", href: "/#gallery" },
  { name: "Book Now", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-safari-primary text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <Link className="text-xl font-bold text-white" href="/">
            Roaring Good Safaris
          </Link>

          <div className="hidden md:flex items-center space-x-4 ml-auto">
            {navItems.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-white text-safari-primary"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {navItems.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-safari-primary text-white"
                          : "text-safari-primary hover:bg-safari-primary/20"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
