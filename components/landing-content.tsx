"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    feature: "Authentication",
    title: "Secure Access",
    description: "Protect your data with robust authentication methods.",
  },
  {
    feature: "Subscription",
    title: "Flexible Plans",
    description:
      "Choose from various subscription options tailored to your needs.",
  },
  {
    feature: "Image Resizing",
    title: "Effortless Scaling",
    description: "Resize your images seamlessly to fit any format or device.",
  },
  {
    feature: "Generative AI",
    title: "Creative Insights",
    description:
      "Harness the power of AI to generate stunning and unique images.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {features.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.feature}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
