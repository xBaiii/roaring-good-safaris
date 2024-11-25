import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, AlertTriangle, LuggageIcon as Suitcase } from "lucide-react";

export default function WhatToBringSection() {
  return (
    <section className="w-full py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          What to Bring
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Suitcase className="w-6 h-6 mr-2 text-primary" />
                Essential Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Light weight, practical clothing</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    A good set of walking shoes you are comfortable getting
                    dirty
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Shower shoes for walking to the bathroom blocks in the
                    evenings
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Warm layers for cold nights out on the salt pans</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Sunscreen, a hat and sunglasses - can't forget to slip slop
                    slap
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>A poncho or rain jacket for Victoria Falls</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Bug repellent or bug protection</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Swimwear for swimming at the resorts</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-yellow-500" />
                Packing Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                Don't pack too much! There is a limit to how much can fit in the
                4x4s.
              </p>
              <ul
                className="space-y-2
"
              >
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Pack light and versatile clothing items</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Consider bringing a small daypack for daily excursions
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>Use packing cubes to organize your belongings</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Bring a reusable water bottle to reduce plastic waste
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
