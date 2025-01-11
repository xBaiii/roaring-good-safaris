import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertTriangle, LuggageIcon as Suitcase } from "lucide-react";

export default function WhatToBringSection() {
  const essentials = [
    "Light weight, practical clothing",
    "A good set of walking shoes you are comfortable getting dirty",
    "Shower shoes for walking to the bathroom blocks in the evenings",
    "Warm layers for cold nights out on the salt pans",
    "Sunscreen, a hat and sunglasses - can’t forget to slip slop slap",
    "A poncho or rain jacket for Victoria Falls",
    "Bug repellent or bug protection",
    "Swimwear for swimming at the resorts",
  ];

  const tips = [
    "Pack light and versatile clothing items",
    "Consider bringing a small daypack for daily excursions",
    "Use packing cubes to organize your belongings",
    "Bring a reusable water bottle to reduce plastic waste",
  ];

  return (
    <section className="w-full py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          What to Bring
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Suitcase className="w-6 h-6 text-primary" />
                <span>Essential Items</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 md:gap-3">
                {essentials.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-md p-3 transition-colors duration-200 ease-in-out hover:bg-muted/70"
                  >
                    <Check className="mt-1 w-5 h-5 text-primary flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
                <span>Packing Tips</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6">
                Don&apos;t pack too much! There is a limit to how much can fit
                in the 4x4s.
              </p>
              <ul className="grid gap-2 md:gap-3">
                {tips.map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-2 rounded-md p-3 transition-colors duration-200 ease-in-out hover:bg-muted/70"
                  >
                    <Check className="mt-1 w-5 h-5 text-primary flex-shrink-0" />
                    <span className="leading-relaxed">{tip}</span>
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
