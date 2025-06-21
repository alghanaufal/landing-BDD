import React from "react";
import BrandSection from "./BrandSection";
import CategoryGridSection from "./StatisticSection"; // Import the new component
import AchivementSection from "./AchivementSection";
import OwnerSection from "./OwnerSection";
import PopularProductsSection from "./PopularProductsSection";

export default function ContentSection() {
  return (
    <section className="py-16 lg:py-24 font-inter">
      <div className="max-w mx-auto">
        {/* Render Brand Section */}
        <BrandSection />

        {/* Render Categories Grid Section */}
        <CategoryGridSection />

        {/* Render Features Section */}
        <AchivementSection />

        <OwnerSection />

        {/* Render Popular Products Section */}
        <PopularProductsSection />
      </div>
    </section>
  );
}
