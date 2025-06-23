import React from "react";
import BrandSection from "./BrandSection";
import StatisticSection from "./StatisticSection";
import AchivementSection from "./AchivementSection";
import OwnerSection from "./OwnerSection";
import ServicesSection from "./ServicesSection";
import SpaceSection from "./SpaceSection";
import StudioSection from "./StudioSection";
import ProgramSection from "./ProgramSection";
import BlogSection from "./BlogSection";
import TestimonySection from "./TestimonySection";
import NewsSection from "./NewsSection";
import FormSection from "./FormSection";
import PopularProductsSection from "./PopularProductsSection";

export default function ContentSection() {
  return (
    <section className="py-16 lg:py-24 font-inter">
      <div className="max-w mx-auto">
        <BrandSection />
        <StatisticSection />
        <AchivementSection />
        <OwnerSection />
        <ServicesSection />
        <SpaceSection />
        <StudioSection />
        <ProgramSection />
        <BlogSection />
        <TestimonySection />
        <NewsSection />
        <FormSection />
        {/* <OwnerSection />
        <PopularProductsSection /> */}
      </div>
    </section>
  );
}
