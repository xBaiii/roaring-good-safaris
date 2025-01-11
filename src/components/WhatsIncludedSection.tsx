import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function WhatsIncludedSection() {
  const includedItems = [
    "Transport in a 4x4 vehicle",
    "15 nights accommodation",
    "Meals and snacks",
    "Camping and cooking gear",
    "Drinking water",
    "Activities in the itinerary",
    "All national park fees",
  ];

  const excludedItems = [
    "Flights to and from Johannesburg",
    "Optional activities",
    "Alcoholic beverages",
    "Tips",
    "Personal expenses, insurance",
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          What to Expect
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Check className="w-6 h-6 text-green-500" />
                <span>What&apos;s Included</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 md:gap-3">
                {includedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-md p-3 transition-colors duration-200 ease-in-out hover:bg-muted/70"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <X className="w-6 h-6 text-red-500" />
                <span>What&apos;s Not Included</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 md:gap-3">
                {excludedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-md p-3 transition-colors duration-200 ease-in-out hover:bg-muted/70"
                  >
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
