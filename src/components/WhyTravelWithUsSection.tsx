import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TelescopeIcon as Binoculars, Tent, Leaf } from "lucide-react";

export default function WhyTravelWithUsSection() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Why Travel With Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <Binoculars className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Experience the Magic of the Wild</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Get up close with wildlife in the experience of a lifetime. See
                herds of elephants playing in the delta and experience a real
                life zebra crossing.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardHeader>
              <Tent className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Camp Under the Stars</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Enjoy evenings by the fire roasting marshmallows under the
                stars. Sleep to the sounds of nature in comfort in the rooftop
                tents.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardHeader>
              <Leaf className="w-12 h-12 mb-4 text-primary" />
              <CardTitle>Sustainable Tourism</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                All campsites and lodges are certified environmentally friendly,
                ensuring your adventure leaves a positive impact on the local
                ecosystem.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
