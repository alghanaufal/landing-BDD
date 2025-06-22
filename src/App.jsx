import React from "react";
import MegaMenu from "./content/MegaMenu";
import HeroSection from "./content/HeroSection";
import ContentSection from "./content/ContentSection";
import FooterSection from "./content/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f4f4] font-inter">
      <MegaMenu />
      <HeroSection />
      <ContentSection />
      <FooterSection />
    </div>
  );
}
