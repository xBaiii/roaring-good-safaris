import Image from "next/image";

export default function GallerySection() {
  const images = [
    { src: "/placeholder.svg?height=300&width=300", alt: "Safari landscape" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Lions resting" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Elephant herd" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Giraffe feeding" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Zebra crossing" },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Sunset over savanna",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Cheetah on the hunt",
    },
    { src: "/placeholder.svg?height=300&width=300", alt: "Hippos in water" },
  ];

  return (
    <section id="gallery" className="w-full py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Safari Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={300}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
