import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"; // Using Lucide React for icons

// Componente AccordionItem untuk setiap item akordeon
const AccordionItem = ({
  id,
  imageSrc,
  title,
  badgeText,
  description,
  exploreLink,
  isOpen,
  onClick,
}) => {
  return (
    <div
      className={`accordion-item border-2 border-black rounded-lg ${
        isOpen ? "active" : ""
      }`}
    >
      <h2 className="accordion-header" id={`Program${id}`}>
        <button
          className="accordion-button flex w-full border-none bg-transparent shadow-none text-left p-4 items-center focus:outline-none"
          type="button"
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={`collapseProgram${id}`}
        >
          {/* Accordion image */}
          {imageSrc && (
            <img
              decoding="async"
              src={imageSrc}
              alt="accordion-image"
              className="w-8 h-8 mr-2" // Adjust image size as needed, example size
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/32x32/cccccc/333333?text=IMG";
              }} // Placeholder for broken image
            />
          )}
          {/* Accordion title */}
          <span className="text-[#222] text-xl font-medium leading-normal ml-4 text-left flex-grow">
            {title}
          </span>
          {/* Badge if present */}
          {badgeText && (
            <span className="badge-program px-2.5 py-1.5 bg-[#FC5649] text-white rounded-md text-base font-semibold leading-normal ml-2.5">
              {badgeText}
            </span>
          )}
          {/* Toggle icon */}
          <div className="ml-auto w-9 h-9 border-2 border-black rounded-full flex items-center justify-center text-[#222] text-2xl">
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </button>
      </h2>
      {/* Accordion body content */}
      <div
        id={`collapseProgram${id}`}
        className={`accordion-collapse transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
        aria-labelledby={`Program${id}`}
      >
        <div className="accordion-body p-0 pt-0 px-4 pb-4">
          <p className="text-[#222] text-base font-light leading-normal m-0 mb-4">
            {description}
          </p>
          {exploreLink && (
            <a
              href={exploreLink}
              className="btn btn-branding-secondary py-[9px] pr-4 pl-6 flex items-center gap-4 w-fit mt-5 bg-transparent border border-black text-black rounded-md transition-all duration-300 ease-in-out
              hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222] hover:text-black"
            >
              Explore More
              <ArrowRight size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ProgramSection() {
  // State to manage the currently active accordion item
  const [activeIndex, setActiveIndex] = useState(0); // Initialize with the first item open

  // Data for the accordion items
  const accordionData = [
    {
      id: 0,
      imageSrc: "p-1.png",
      title: "Events",
      badgeText: "NEW!",
      description:
        "As one of the players in the industry, being dexterous and adaptive are keys. Generating and expanding networks has become one of our values, as lists of events and collaborations from our notable media and partners are displayed",
      exploreLink: "https://bolehdicoba.com/program/events/",
    },
    {
      id: 1,
      imageSrc: "p-2.png",
      title: "Breakfast Club",
      badgeText: null, // No badge for this item
      description:
        "“GOOD FOOD ENDS WITH GOOD TALK” - Geoffrey Neighor\n\nWe bring you one of the most relaxed yet productive sharing sessions during breakfast time. Curated and tasteful. Two words that would best describe this monthly program, a set of two-hour discussion with our selected group of guest lists.\n\nNo matter what you say over a cup of coffee and any preferred choice of croissants, it might lead to something bigger: network and collaboration.",
      exploreLink: "https://bolehdicoba.com/program/breakfast-club/",
    },
    {
      id: 2,
      imageSrc: "p-3.png",
      title: "Bulletin Report by BDD",
      badgeText: null, // No badge for this item
      description:
        "Throughout our journey in the industry since its establishment in 2017, we have encountered numerous challenges and collaborated with brands from various industries. As your growth partner, one of our main sources of satisfaction is acknowledgement that brands we work with are able to create and achieve the desired results.\n\nWe decided to share our two-cents in order to assist and give several trends and insights for business owners in understanding the industry better during a particular period of time.",
      exploreLink: "https://bolehdicoba.com/program/bulletin/",
    },
  ];

  // Function to handle accordion item click
  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle active state
  };

  return (
    <div
      className="section-program max-w-[1140px] mx-auto my-24 flex flex-row items-center gap-8
                    md:justify-center lg:gap-12
                    max-sm:max-w-none max-sm:my-12 max-sm:mb-[70px] max-sm:px-4 max-sm:flex-col"
    >
      {/* Program Text Section */}
      <div
        className="program-text
                      md:flex-none md:w-[40.517vw]"
      >
        <div className="program-subtitle mb-4">
          <p
            className="subtitle text-[#513B6A] text-sm font-medium leading-normal m-0
                        max-sm:text-base max-sm:text-center"
          >
            OUR PROGRAM
          </p>
        </div>
        <div className="program-title mb-5 max-sm:mb-4">
          <h4
            className="title text-[#222] text-4xl font-normal leading-normal m-0
                        max-sm:text-2xl max-sm:leading-7 max-sm:text-center"
          >
            We Offer More Than Meets The Eye
          </h4>
        </div>
        <div className="program-description mb-8">
          <p
            className="description text-[#222] text-base font-light leading-normal m-0
                        max-sm:text-sm max-sm:text-center"
          >
            As your go-to digital marketing partner to support your brand
            business, we manage to provide integrated programmes within the
            company to resonate our values externally, as we keep on spreading
            our wings to influence the industry.
          </p>
        </div>
        {/* Image for mobile view */}
        <div className="program-image block md:hidden flex-none w-full mb-8 overflow-hidden">
          <img
            decoding="async"
            src="https://bolehdicoba.com/wp-content/uploads/2024/06/Group-40343-8.png"
            alt="program-us"
            className="w-full h-auto rounded-lg" // Added rounded-lg for consistency
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/510x300/cccccc/333333?text=Image";
            }} // Placeholder for broken image
          />
        </div>
        {/* Accordion Section */}
        <div className="program-accordion">
          <div className="accordion flex flex-col gap-4" id="accordionProgram">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={item.id}
                id={item.id}
                imageSrc={item.imageSrc}
                title={item.title}
                badgeText={item.badgeText}
                description={item.description}
                exploreLink={item.exploreLink}
                isOpen={activeIndex === index}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Image for desktop view */}
      <div
        className="program-image hidden md:block relative flex-none w-[510px] overflow-hidden
                      md:w-[41.517vw]"
      >
        <img
          decoding="async"
          src="./program.png"
          alt="program-us"
          className="w-full h-full" // Added rounded-lg for consistency
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/510x300/cccccc/333333?text=Image";
          }} // Placeholder for broken image
        />
      </div>
    </div>
  );
}
