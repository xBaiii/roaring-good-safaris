import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="relative h-[calc(100vh-4rem)] min-h-[500px] w-full overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9cbcb7d1eeef277ea35e7394f66716bd-xdjpw01XaAE2LHoDP8x6xm5RaBgucJ.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative h-full w-full">
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Experience the Wild with Roaring Good Safaris
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
            Unforgettable adventures across Botswana's most breathtaking
            landscapes
          </p>
          <div className="flex gap-4">
            <Button
              asChild
              size="lg"
              className="bg-safari-primary hover:bg-[hsl(var(--marsh-dark))] text-white"
            >
              <Link href="/itinerary">View Itinerary</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/20 text-white hover:bg-white/40 hover:text-white"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
