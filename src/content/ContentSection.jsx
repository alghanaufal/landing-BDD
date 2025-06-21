import React from "react";
import BrandSection from "./BrandSection";
import FeaturesSection from "./FeaturesSection";
import PopularProductsSection from "./PopularProductsSection";
import CategoryGridSection from "./StatisticSection"; // Import the new component

export default function ContentSection() {
  return (
    <section className="py-16 lg:py-24 font-inter">
      <div className="max-w mx-auto px-4 sm:px-6 lg:px-8">
        {/* Render Brand Section */}
        <BrandSection />

        {/* Render Categories Grid Section */}
        <CategoryGridSection />

        {/* Render Features Section */}
        <FeaturesSection />

        {/* Render Popular Products Section */}
        <PopularProductsSection />
      </div>
    </section>
  );
}
