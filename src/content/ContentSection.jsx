import React from "react";
import BrandSection from "./BrandSection";
import StatisticSection from "./StatisticSection";
import AchivementSection from "./AchivementSection";
import OwnerSection from "./OwnerSection";
import ServicesSection from "./ServicesSection";
import SpaceSection from "./SpaceSection";
import ProgramSection from "./ProgramSection";
import BlogSection from "./BlogSection";
import TestimonySection from "./TestimonySection";
import NewsSection from "./NewsSection";
import FormSection from "./FormSection";

export default function ContentSection() {
  const space = {
    title: "Our Space - Where Ideas Take Flight",
    description:
      "Step into BDD's Agency—where strategy meets imagination. A space designed for collaboration, innovation, and bringing bold ideas to life.",
    images: [
      { id: 1, src: "./space.webp" },
      { id: 2, src: "./space.webp" },
      { id: 3, src: "./space.webp" },
      { id: 4, src: "./space.webp" },
      { id: 5, src: "./space.webp" },
    ],
  };
  const studio = {
    title: "Our Live Studio - Lights, Camera, Conversion!",
    description:
      "BDD's state-of-the-art studio is built for high-impact live streaming and content production. From brands to creators, we turn every session into a performance that sells.",
    images: [
      { id: 1, src: "./studio.webp" },
      { id: 2, src: "./studio.webp" },
      { id: 3, src: "./studio.webp" },
      { id: 4, src: "./studio.webp" },
      { id: 5, src: "./studio.webp" },
    ],
  };
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w mx-auto">
        <BrandSection />
        <StatisticSection />
        <AchivementSection />
        <OwnerSection />
        <ServicesSection />
        <SpaceSection data={space} />
        <SpaceSection data={studio} />
        <ProgramSection />
        <BlogSection />
        <TestimonySection />
        <NewsSection />
        <FormSection />
      </div>
    </section>
  );
}
