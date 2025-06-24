import React, { useState } from "react";

export default function OwnerSection() {
  const accordionItems = [
    {
      id: "why-1",
      image: "./o-1.png",
      title: "Meaningful Growth",
      content:
        "Trust the process in elevating your business by enhancing every step of the way, guided by a team of professionals.",
    },
    {
      id: "why-2",
      image: "./o-2.png",
      title: "Collaborative Partnership",
      content:
        "Company values meet potential augmentation, create an exciting connection towards propitious business development.",
    },
    {
      id: "why-3",
      image: "./o-3.png",
      title: "Perceptive Exploration",
      content:
        "We're not just a player in this industry; we're visionaries. Watch our unique exploration and discover what others overlook.",
    },
  ];

  const [activeAccordionItem, setActiveAccordionItem] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordionItem(activeAccordionItem === id ? null : id);
  };

  return (
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
              It's not about how much budget you spent, but how you spend them.
            </h2>
          </div>
          {/* Description */}
          <div className="mb-[30px] text-center md:text-left">
            <p className="text-[#222] text-base font-light leading-[22px]">
              Embracing a focus of sustainable growth, we prioritise cultivating
              long-term partnerships, ensuring your brand's growth aligns with
              effective practices. Together, we create a positive impact that
              goes beyond immediate gains, making a meaningful difference in the
              lives of your customers and the market you serve.
            </p>
          </div>

          {/* Accordion Container */}
          <div>
            {accordionItems.map((item, index) => {
              const isActive = activeAccordionItem === item.id;
              return (
                <div
                  key={item.id}
                  className={`border-l border-l-[#d9d4cb] ${
                    index !== accordionItems.length - 1 ? "pb-5" : ""
                  }`}
                >
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
