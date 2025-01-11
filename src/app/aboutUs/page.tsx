import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 md:gap-32 gap-10 items-center">
        <div className="text-lg text-muted-foreground">
          <h1 className="text-4xl font-bold mb-6 text-primary ">
            Meet your guide
          </h1>
          <p>
            Mark, from Melbourne, has a strong connection to Botswana's stunning
            landscapes and wildlife. He spent three years in the country,
            teaching in the village of Tutume and managing Xakanaxa Safari Camp
            in the Okavango Delta. There, he guided guests on safari drives,
            sharing the beauty of Africa's wilderness.
          </p>
          <p>
            For more than a decade, Mark has organized safaris for friends and
            family, driven by his love for Botswana's wildlife and culture. His
            goal is to create meaningful experiences that foster a lasting
            appreciation for this remarkable part of the world.
          </p>
        </div>
        <div>
          <div className="relative ">
            <Image
              src="/img/mark.jpg"
              alt="Evening campfire in the boma"
              height={600}
              width={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
