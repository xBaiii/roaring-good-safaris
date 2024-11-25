import HeroBanner from "@/components/hero-banner";
import OkavangoDeltaSection from "@/components/OkavangoDeltaSection";
import WhyTravelWithUsSection from "@/components/WhyTravelWithUsSection";
import ParallaxSection from "@/components/parallax-section";
import WhatToBringSection from "@/components/WhatToBringSection";
import WhatsIncludedSection from "@/components/WhatsIncludedSection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroBanner />
      <OkavangoDeltaSection />
      <WhyTravelWithUsSection />
      <ParallaxSection />
      <WhatToBringSection />
      <WhatsIncludedSection />
      <GallerySection />
    </div>
  );
}
