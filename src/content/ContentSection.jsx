import React from "react";
import BrandSection from "./BrandSection";
import CategoryGridSection from "./StatisticSection";
import AchivementSection from "./AchivementSection";
import OwnerSection from "./OwnerSection";
import ServicesSection from "./ServicesSection";
import SpaceSection from "./SpaceSection";
import StudioSection from "./StudioSection";
import PopularProductsSection from "./PopularProductsSection";

export default function ContentSection() {
  return (
    <section className="py-16 lg:py-24 font-inter">
      <div className="max-w mx-auto">
        <BrandSection />
        <CategoryGridSection />
        <AchivementSection />
        <OwnerSection />
        <ServicesSection />
        <SpaceSection />
        <StudioSection />
        <OwnerSection />
        <PopularProductsSection />
      </div>
    </section>
  );
}
