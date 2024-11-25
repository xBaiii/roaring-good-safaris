import Image from "next/image";

export default function OkavangoDeltaSection() {
  return (
    <section className="w-full py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary">
              Discover the Untamed Majesty of Botswana and the Okavango Delta
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the serene beauty of the delta's wetlands to the rugged
              splendor of the surrounding reserves, this region promises a
              breathtaking immersion in nature's most exquisite spectacles. A
              labyrinth of waterways and lush islands create a vibrant tapestry
              of life, where every turn reveals new wonders and unforgettable
              moments.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5a9cb0601bfabd6777bf87bb472a1979-HD30GtaNXd6XzNWKixVcL4r2w5sZHn.webp"
                alt="Hippos in the Okavango Delta"
                width={800}
                height={600}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
