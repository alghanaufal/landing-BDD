import React from "react";

export default function FeaturesSection() {
  // Data for feature items
  const features = [
    {
      icon: "🚚",
      title: "Free Shipping",
      description: "Free delivery on orders over $50",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      description: "100% secure payment processing",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      description: "30-day hassle-free returns",
    },
    {
      icon: "🎧",
      title: "24/7 Support",
      description: "Round-the-clock customer service",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      {features.map((feature, index) => (
        <div key={index} className="text-center group">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-2xl group-hover:bg-blue-200 transition-colors duration-300">
            {feature.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
