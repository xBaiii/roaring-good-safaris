import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6 text-primary">Get in Touch</h1>
          <p className="text-lg mb-8 text-muted-foreground">
            Ready to embark on your safari adventure? We're here to help you
            plan the trip of a lifetime. Fill out the form, and we'll get back
            to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="text-primary" />
              <span>+61 418 184 601</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-primary" />
              <span>info@roaringgoodsafaris.com</span>
            </div>
          </div>
        </div>
        <div>
          <Card className="w-full bg-[#f5f1eb]">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      placeholder="+1 234 567 8900"
                      type="tel"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your dream safari..."
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-primary text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What's included in the safari package?
            </AccordionTrigger>
            <AccordionContent>
              Our safari packages typically include accommodation, meals,
              transportation in 4x4 vehicles, park fees, and guided game drives.
              Specific inclusions may vary depending on the chosen itinerary.
              Please refer to the detailed itinerary for each safari for a
              complete list of inclusions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How many people are in a safari group?
            </AccordionTrigger>
            <AccordionContent>
              Our safari groups are kept small to ensure a personalized
              experience. Typically, we have 6-12 people per group. This allows
              for comfortable travel in our vehicles and ensures everyone gets a
              good view during game drives.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What's the best time of year to go on a safari?
            </AccordionTrigger>
            <AccordionContent>
              The best time for a safari depends on what you want to see. The
              dry season (June to October) is generally considered the best for
              game viewing as animals gather around water sources. However, the
              wet season (November to May) offers lush landscapes and is great
              for bird watching.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do I need any vaccinations for the safari?
            </AccordionTrigger>
            <AccordionContent>
              Vaccination requirements can vary depending on your home country
              and the specific areas you'll be visiting. We recommend consulting
              with your doctor or a travel clinic at least 6-8 weeks before your
              trip. They can provide the most up-to-date medical advice and
              necessary vaccinations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
