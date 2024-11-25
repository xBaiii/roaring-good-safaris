import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function WhatsIncludedSection() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          What to Expect
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Check className="w-6 h-6 mr-2 text-green-500" />
                What's Included
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Transport in a 4x4 vehicle</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>15 nights accommodation</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Meals and snacks</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Camping and cooking gear</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Drinking water</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Activities in the itinerary</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>All national park fees</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <X className="w-6 h-6 mr-2 text-red-500" />
                What's Not Included
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span>Flights to and from Johannesburg</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span>Optional activities</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span>Alcoholic beverages</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span>Tips</span>
                </li>
                <li className="flex items-start">
                  <X className="w-5 h-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span>Personal expenses, insurance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
