import React, { useState } from "react";

export default function OwnerSection() {
  const accordionItems = [
    {
      id: "why-1",
      image: "./o-1.png",
      title: "Comprehensive Digital Marketing Services",
      content:
        "We offer a full suite of digital marketing solutions, from SEO and SEM to social media and content marketing, ensuring all your needs are met under one roof.",
    },
    {
      id: "why-2",
      image: "./o-2.png",
      title: "Data-Driven Strategies for Optimal Results",
      content:
        "Our approach is rooted in deep data analysis, allowing us to craft highly effective campaigns that deliver measurable and significant ROI for our clients.",
    },
    {
      id: "why-3",
      image: "./o-3.png",
      title: "Experienced and Certified Professionals",
      content:
        "Our team comprises Meta & Google certified experts with years of experience, ensuring your brand is handled by the best in the industry.",
    },
  ];

  const [activeAccordionItem, setActiveAccordionItem] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordionItem(activeAccordionItem === id ? null : id);
  };

  return (
    // Section container
    <section className="px-4 md:px-0 my-[50px] mb-[70px] md:my-[100px] md:mb-[139px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-[30px] md:gap-[50px]">
        {/* Image Section */}
        <div className="w-full md:w-[510px] flex-none order-2 md:order-1">
          <img
            src="./owner.png"
            alt="Why Choose Us"
            className="w-full h-full"
          />
        </div>

        {/* Text and Accordion Section */}
        <div className="w-full order-1 md:order-2">
          {/* Subtitle */}
          <div className="mb-4 text-center md:text-left">
            <p className="text-[#513b6a] text-sm font-medium leading-normal">
              WHY CHOOSE US
            </p>
          </div>
          {/* Title */}
          <div className="mb-5 text-center md:text-left">
            <h2 className="text-[#222] text-3xl md:text-[44px] font-normal leading-tight md:leading-normal">
              Unlock Your Brand's Potential with Our Expertise.
            </h2>
          </div>
          {/* Description */}
          <div className="mb-[30px] text-center md:text-left">
            <p className="text-[#222] text-base font-light leading-[22px]">
              We are dedicated to helping businesses thrive in the digital
              landscape. Our commitment to innovation, transparency, and results
              sets us apart.
            </p>
          </div>

          {/* Accordion Container */}
          <div>
            {accordionItems.map((item, index) => {
              const isActive = activeAccordionItem === item.id;
              return (
                // This outer div provides the default gray border
                <div
                  key={item.id}
                  className={`border-l border-l-[#d9d4cb] ${
                    index !== accordionItems.length - 1 ? "pb-5" : ""
                  }`}
                >
                  {/* Accordion Header / Button */}
                  {/* When active, this gets the green border to overlay the gray one */}
                  <h2
                    className={`m-0 ${
                      isActive ? "border-l-2 border-l-[#33b8a5] -ml-px" : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="w-full bg-transparent border-0 shadow-none text-left flex items-center gap-[15px] px-2 md:px-5 py-2 text-[#222] text-lg md:text-xl leading-normal"
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={isActive}
                      aria-controls={`collapse-${item.id}`}
                    >
                      <span className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={`Icon for ${item.title}`}
                          className="object-contain w-full h-full md:w-full md:h-full"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://placehold.co/55/ff0000/ffffff?text=X";
                          }}
                        />
                      </span>
                      {item.title}
                    </button>
                  </h2>
                  {/* Accordion Content */}
                  <div
                    id={`collapse-${item.id}`}
                    style={{
                      maxHeight: isActive ? "200px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s ease-in-out",
                    }}
                    // The content block ALSO gets the green border when active
                    className={`${
                      isActive ? "border-l-2 border-l-[#33b8a5] -ml-px" : ""
                    }`}
                  >
                    <div className="pt-2 pb-4 pl-[50px] md:pl-[85px] pr-5 text-[#222] text-sm font-light">
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
