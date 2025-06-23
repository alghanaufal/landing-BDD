import React from "react";

export default function StatisticSection() {
  // Data for the statistics cards
  const stats = [
    {
      value: "800+",
      label: "Clients Growing",
      bgColorClass: "bg-blue-600",
    },
    {
      value: "140+",
      label: "Teams of Professional",
      bgColorClass: "bg-orange-400",
    },
    {
      value: "50+",
      label: "Meta & Google Certified Professional",
      bgColorClass: "bg-purple-600",
    },
    {
      value: "400 Mio+",
      label: "Online Engagement Performance",
      bgColorClass: "bg-teal-400",
    },
    {
      value: "USD 15 Mio+",
      label: "Advertising Spend",
      bgColorClass: "bg-red-500",
    },
    {
      value: "+ And Many More",
      label: "",
      isMoreCard: true,
    },
  ];

  return (
    // Section container
    <section className="p-4 md:p-0 my-12 md:my-24">
      {/* Container adjusted to be wider (max-w-7xl) and content aligned with justify-between */}
      <div className="max-w-7xl mx-auto bg-[#f8f4f4] rounded-none md:rounded-3xl p-4 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
        {/* Header content: Adjusted width to give more space to the stats cards on the right */}
        <div className="w-full lg:w-2/5 flex flex-col gap-4 text-center lg:text-left">
          <p className="text-purple-700 text-sm md:text-base font-medium">
            WE ON NUMBERS
          </p>
          <h2 className="text-gray-900 text-2xl md:text-4xl font-normal leading-tight">
            We Establish an Ecosystem to Enhance Brand Growth.
          </h2>
          <p className="text-gray-800 text-sm md:text-base font-light leading-relaxed">
            Beyond conventional marketing norms, we craft innovative strategies
            infused with data-driven insights to create comprehensive campaigns
            that resonate with target audiences for 800+ clients.
          </p>
        </div>

        {/* Body content: Grid of statistic cards, adjusted width */}
        <div className="w-full lg:w-1/2">
          {/* On large screens, cards are aligned to the right to match the image */}
          <div className="flex flex-wrap gap-3.5 md:gap-5 justify-center lg:justify-end">
            {stats.map((stat, index) => {
              // Determine card classes based on its type and index
              const isLargeCard = [0, 3, 4].includes(index);
              const cardSizeClass = isLargeCard
                ? "w-full sm:w-[calc(50%-0.5rem)] lg:w-[259px]"
                : "w-full sm:w-[calc(50%-0.5rem)] lg:w-[211px]";
              const moreCardBaseClass = "bg-[#eee9df] border-2 border-black";
              const normalCardBaseClass =
                "bg-white border-2 border-black hover:shadow-[4px_4px_0px_0px_#222]";

              return (
                <div
                  key={index}
                  className={`
                    group relative rounded-lg transition-shadow duration-200 ease-in-out overflow-hidden box-border
                    min-h-[108px] md:min-h-[151px]
                    ${stat.isMoreCard ? moreCardBaseClass : normalCardBaseClass}
                    ${cardSizeClass}
                  `}
                >
                  {/* Card text content */}
                  <div
                    className={`
                    absolute inset-0 z-10 flex flex-col justify-between transition-colors duration-300 ease-in-out
                    p-4 md:p-6 
                    ${
                      stat.isMoreCard
                        ? "justify-center items-center"
                        : "group-hover:text-white"
                    }
                  `}
                  >
                    <div>
                      <p
                        className={`
                        font-semibold text-gray-900 transition-colors duration-300 ease-in-out
                        text-2xl md:text-4xl mb-1
                         ${
                           stat.isMoreCard
                             ? "text-xl text-center"
                             : "group-hover:text-white"
                         }
                      `}
                      >
                        {stat.value}
                      </p>
                    </div>
                    <div>
                      <p
                        className={`
                        font-light text-gray-900 transition-colors duration-300 ease-in-out
                        text-xs md:text-base
                         ${stat.isMoreCard ? "" : "group-hover:text-white"}
                      `}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </div>

                  {/* Animated color background for normal cards */}
                  {!stat.isMoreCard && (
                    <div
                      className={`
                        absolute top-0 right-0 bottom-0 h-full border-l-2 border-black z-0
                        w-2.5 rounded-r-md group-hover:w-full group-hover:border-transparent group-hover:rounded-md
                        transition-all duration-500 ease-in-out
                        ${stat.bgColorClass}
                      `}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
