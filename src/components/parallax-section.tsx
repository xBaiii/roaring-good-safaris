"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Users, Wallet, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ParallaxSection() {
  return (
    <section
      className="relative h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5079d953c9d5b5b9f78bfc49dd1347c6.jpg-QnZzpNe9CokJbk5LZz2ayOlZ4L6n3H.jpeg")',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
          <Card className="bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300">
            <CardContent className="flex flex-col items-center text-center p-6 space-y-3">
              <Home className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-semibold">Accommodation</h3>
              <p className="text-sm sm:text-base">
                Stay in a mix of lodges and rooftop camping
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300">
            <CardContent className="flex flex-col items-center text-center p-6 space-y-3">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-semibold">Group Size</h3>
              <p className="text-sm sm:text-base">Group sizes of up to 12</p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300">
            <CardContent className="flex flex-col items-center text-center p-6 space-y-3">
              <Wallet className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-semibold">Pricing</h3>
              <p className="text-sm sm:text-base">
                From{" "}
                <span className="text-primary font-semibold">4500 AUD</span> per
                person twin share.{" "}
                <span className="text-primary font-semibold">500 AUD</span>{" "}
                deposit required to secure your spot
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm hover:bg-white transition-colors duration-300">
            <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
              <Calendar className="w-8 h-8 text-primary" />
              <h3 className="text-lg font-semibold">Dates</h3>
              <p className="text-sm sm:text-base">Winter 2025 now available</p>
              <Button asChild className="w-full text-sm sm:text-base py-2">
                <Link href="/contact">Book Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
