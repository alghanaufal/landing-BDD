import React, { useState } from "react";

export default function OwnerSection() {
  // Data untuk item-item accordion
  const accordionItems = [
    {
      id: "why-1",
      image: "./o-1.png", // Path ke gambar ikon untuk item ini
      title: "Comprehensive Digital Marketing Services",
      content:
        "We offer a full suite of digital marketing solutions, from SEO and SEM to social media and content marketing, ensuring all your needs are met under one roof.",
    },
    {
      id: "why-2",
      image: "./o-2.png", // Path ke gambar ikon untuk item ini
      title: "Data-Driven Strategies for Optimal Results",
      content:
        "Our approach is rooted in deep data analysis, allowing us to craft highly effective campaigns that deliver measurable and significant ROI for our clients.",
    },
    {
      id: "why-3",
      image: "./o-3.png", // Path ke gambar ikon untuk item ini
      title: "Experienced and Certified Professionals",
      content:
        "Our team comprises Meta & Google certified experts with years of experience, ensuring your brand is handled by the best in the industry.",
    },
  ];

  // State untuk melacak item accordion yang sedang aktif
  const [activeAccordionItem, setActiveAccordionItem] = useState(null);

  // Fungsi untuk toggle accordion item
  const toggleAccordion = (id) => {
    setActiveAccordionItem(activeAccordionItem === id ? null : id);
  };

  return (
    <div className="section-choose-us mb-20">
      {/* Bagian Kiri: Gambar */}
      <div className="choose-image">
        <img
          src="./owner.png" // Placeholder image
          alt="Why Choose Us"
          className="w-full h-full object-cover rounded-xl" // Tailwind for image styling
        />
      </div>

      {/* Bagian Kanan: Teks dan Accordion */}
      <div className="choose-text">
        <div className="choose-subtitle">
          <p className="subtitle">WHY CHOOSE US</p>
        </div>
        <div className="choose-title">
          <h2 className="title">
            Unlock Your Brand's Potential with Our Expertise.
          </h2>
        </div>
        <div className="choose-description">
          <p className="description">
            We are dedicated to helping businesses thrive in the digital
            landscape. Our commitment to innovation, transparency, and results
            sets us apart.
          </p>
        </div>

        <div className="choose-accordion">
          {accordionItems.map((item) => (
            <div
              key={item.id}
              className={`accordion-item ${
                activeAccordionItem === item.id ? "active" : ""
              }`}
            >
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={
                    activeAccordionItem === item.id ? "true" : "false"
                  }
                  aria-controls={`collapse-${item.id}`}
                >
                  <span className="accordion-icon">
                    {/* Menggunakan gambar dari data item */}
                    <img
                      src={item.image}
                      alt={`Icon for ${item.title}`}
                      className="object-contain" // Tailwind classes for icon sizing
                    />
                  </span>
                  {item.title}
                </button>
              </h2>
              <div
                id={`collapse-${item.id}`}
                className={`accordion-collapse ${
                  activeAccordionItem === item.id ? "open" : "collapsed"
                }`}
                style={{
                  maxHeight: activeAccordionItem === item.id ? "500px" : "0", // Animasi tinggi
                  overflow: "hidden",
                  transition: "max-height 0.3s ease-in-out",
                }}
              >
                <div className="accordion-body">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
