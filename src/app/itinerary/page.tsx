import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function Itinerary() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Available Safari Trips</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Dates</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Deposit</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>May 20, 2025 - June 4, 2025</TableCell>
                  <TableCell>From 4500 AUD per person (twin share)</TableCell>
                  <TableCell>500 AUD</TableCell>
                  <TableCell>
                    <Button asChild>
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <h1 className="text-4xl font-bold mb-4 text-primary">
          Botswana Safari Itinerary
        </h1>
        <p className="text-lg mb-8 text-muted-foreground">
          Experience the wild beauty of Botswana on this 15-day adventure from
          May 20 to June 4, 2025.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Arrival: Johannesburg, May 20, 2025
            </h2>
            <p className="text-muted-foreground mb-6">
              If you'd like to explore, consider arriving a day early for a tour
              of Soweto or the city's highlights. We'll also stop by a
              supermarket to stock up on supplies for the trip.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Day 1: May 21, 2025</h2>
            <p className="text-muted-foreground mb-6">
              Pick up our 4x4 vehicles and head to a safari lodge just below the
              Botswana border. Enjoy a BBQ dinner around the campfire in the
              boma, a traditional African outdoor eating area.
            </p>
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-P19DIWZiK3Lr6YCCLQkZDsBxOJp9pn.webp"
                alt="Evening campfire in the boma"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Day 2: May 22, 2025</h2>
            <p className="text-muted-foreground mb-6">
              Cross the Botswana border, completing the necessary paperwork.
              Afterward, we'll travel to Francistown for lunch, refueling, and
              picking up additional supplies (please note, we can't bring meat
              into Botswana). Our overnight destination is the Woodlands Bird
              Sanctuary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Day 3: May 23, 2025</h2>
            <p className="text-muted-foreground mb-6">
              Today, we'll journey to Kubu Island in the Makgadikgadi Pans. This
              unique destination features a rocky outcrop surrounded by vast
              salt flats, dotted with ancient baobab trees. Enjoy breathtaking
              views, especially at sunrise and sunset. Kubu Island is rich in
              cultural history, home to ancient stone ruins and artifacts,
              offering a tranquil escape from modern life.
            </p>
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-8iTqx6UpaNydxi9NKJghbAgoRWF4Ju.webp"
                alt="Sunset at Kubu Island"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Day 4: May 24, 2025</h2>
            <p className="text-muted-foreground mb-6">
              Drive from Kubu Island to Maun, where we'll stay on the banks of
              the Thamalakane River. Dinner will be at a local restaurant
              featuring traditional African cuisine. We'll also refuel and stock
              up on groceries before heading into Moremi Game Reserve the
              following day.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Days 5-7: May 25-27, 2025
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore Moremi Game Reserve, which is considered one of the best
              game reserves in Africa. Enjoy the next seven days immersed in
              nature, with no roads, street signs, or mobile phone coverage -
              just the wild. (Don't worry, there are hot showers!)
            </p>
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-MOMwL5QkaDM5smsVDkr4X2MqN6Bh2d.jpeg"
                alt="Wildlife under acacia tree"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Days 8-10: May 27-29, 2025
            </h2>
            <p className="text-muted-foreground mb-6">
              Next, we'll spend three days in Chobe Game Reserve, camping at
              Savuti Marsh. This region is known for its elephant populations
              and different scenery compared to Moremi, featuring a drier
              landscape with plenty of lions and hyenas. We'll also seek out
              Bushman rock paintings.
            </p>
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-Kq02U8JGq2B2F0DJXc6jbY8MgljHP7.jpeg"
                alt="Elephants at waterhole"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Days 11-12: May 29-31, 2025
            </h2>
            <p className="text-muted-foreground mb-6">
              Travel to Kasane, driving along the Chobe River. We'll spend two
              nights in chalets on the banks of the Chobe and Zambezi rivers. A
              private bus will take us to Victoria Falls, known locally as
              Mosi-oa-Tunya ("The Smoke That Thunders"). Be sure to bring a rain
              poncho, as you may get soaked without one!
            </p>
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-NkhIGzorGMgX2SAhDEXuXhVT9LOALO.jpeg"
                alt="Rainbow over Victoria Falls"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Day 13: June 1, 2025
            </h2>
            <p className="text-muted-foreground mb-6">
              Our next stop is Nata, located on the edge of the Makgadikgadi
              Pans. Driving along the main highway we're likely to see elephants
              and zebra crossings. We'll camp for the night, relax by the pool
              with a drink, and enjoy dinner at the restaurant.
            </p>
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-d91dxe4kMXR8HxnI49Znqh0zgnkica.png"
                alt="Zebras in their natural habitat"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Day 14: June 2, 2025
            </h2>
            <p className="text-muted-foreground mb-6">
              Visit the Khama Rhino Sanctuary for an opportunity to see rhinos
              up close as we camp there for the night.
            </p>
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.jpg-oZGSqO8kdIWMqB1NLTgRyFxyISEmUT.jpeg"
                alt="Rhino at Khama Rhino Sanctuary"
                fill
                className="object-cover"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Day 15: June 3, 2025
            </h2>
            <p className="text-muted-foreground mb-6">
              Return to the Botswana border crossing and back to the safari
              lodge in South Africa for another BBQ in the boma. We'll
              consolidate our packing for the journey home to Johannesburg the
              next day.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Departure: June 4, 2025
            </h2>
            <p className="text-muted-foreground mb-6">
              Travel from Buffalo Thorn Lodge to the 4x4 depot. Some group
              members may choose to extend their trip to Cape Town for delicious
              food, wine tasting, sightseeing, and shopping.
            </p>
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-UA7HedtAbwHNPmHD3QCPWpodn4VGHm.webp"
                alt="Cape Town harbor at sunset"
                fill
                className="object-cover"
              />
            </div>
          </section>
        </div>
        <Separator className="my-8" />

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Embark on Your Safari Adventure?
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-safari-primary hover:bg-[hsl(var(--marsh-dark))] text-white"
          >
            <Link href="/contact">Book Your Safari Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
