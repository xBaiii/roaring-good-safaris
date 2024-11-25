"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Users, Wallet, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ParallaxSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;

    if (!parallaxElement) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const sectionTop = parallaxElement.offsetTop;
      const sectionHeight = parallaxElement.offsetHeight;
      const offset = scrolled - sectionTop + window.innerHeight;
      const percentage = Math.min(Math.max(offset / sectionHeight, 0), 1);
      const translateY = percentage * 50;
      parallaxElement.style.transform = `translate3d(0, ${translateY}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden h-[600px] md:h-[500px] w-full">
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0"
        style={{ willChange: "transform" }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5079d953c9d5b5b9f78bfc49dd1347c6.jpg-QnZzpNe9CokJbk5LZz2ayOlZ4L6n3H.jpeg"
          alt="Sunset over safari landscape"
          fill
          className="object-cover object-center"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
          <Card className="bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300 text-sm sm:text-base">
            <CardContent className="flex items-start space-x-2 sm:space-x-4 pt-4 sm:pt-6">
              <Home className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
              <p className="text-sm sm:text-base">
                Stay in a mix of lodges and rooftop camping
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300 text-sm sm:text-base">
            <CardContent className="flex items-start space-x-2 sm:space-x-4 pt-4 sm:pt-6">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
              <p className="text-sm sm:text-base">Group sizes of up to 12</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300 text-sm sm:text-base">
            <CardContent className="flex items-start space-x-2 sm:space-x-4 pt-4 sm:pt-6">
              <Wallet className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
              <p className="text-sm sm:text-base">
                From{" "}
                <span className="text-primary font-semibold">4500 AUD</span> per
                person twin share.{" "}
                <span className="text-primary font-semibold">500 AUD</span>{" "}
                deposit required to secure your spot
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300 text-sm sm:text-base">
            <CardContent className="flex flex-col items-start space-y-4 pt-4 sm:pt-6">
              <div className="flex items-start space-x-2 sm:space-x-4">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                <p className="text-sm sm:text-base">
                  Winter 2025 now available
                </p>
              </div>
              <Button
                asChild
                className="w-full text-sm sm:text-base py-1 sm:py-2"
              >
                <Link href="/contact">Book Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
