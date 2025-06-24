import React, { useState, useEffect } from "react";

export default function BrandSection() {
  const [activeBrandSetIndex, setActiveBrandSetIndex] = useState(0);
  const [responsiveKey, setResponsiveKey] = useState(0);

  const popularBrands1 = [
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
  ];
  const popularBrands2 = [
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
  ];
  const popularBrands3 = [
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
  ];
  const popularBrands4 = [
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
  ];
  const popularBrands5 = [
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
    {
      logo: "./Brand1.png",
    },
    {
      logo: "./Brand2.png",
    },
    {
      logo: "./Brand3.png",
    },
    {
      logo: "./Brand4.png",
    },
    {
      logo: "./Brand5.png",
    },
  ];

  const loopedBrands = [
    ...popularBrands1,
    ...popularBrands2,
    ...popularBrands3,
    ...popularBrands4,
    ...popularBrands5,
  ];

  const allBrandSets = [
    { id: "Fashion", label: "Fashion", data: loopedBrands },
    { id: "FnB", label: "FnB", data: loopedBrands },
    { id: "Beauty", label: "Beauty", data: loopedBrands },
    { id: "Lifestyle", label: "Lifestyle", data: loopedBrands },
    { id: "Startup & Other", label: "Startup & Other", data: loopedBrands },
    {
      id: "FMCGs & Corporations",
      label: "FMCGs & Corporations",
      data: loopedBrands,
    },
  ];

  const currentBrandsData = allBrandSets[activeBrandSetIndex].data;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setResponsiveKey((prevKey) => prevKey + 1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center lg:p-4 font-sans">
      <div className="bg-white rounded-2xl border border-black py-8 lg:py-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl text-gray-900 mb-4 px-2">
            Over
            <span className="text-teal-400 font-bold"> 800+ </span>
            Businesses growing with Boleh Dicoba Digital
          </h2>
        </div>
        <div className="overflow-x-auto custom-scrollbar-hidden mb-8">
          <div className="flex flex-nowrap space-x-2 sm:space-x-4 justify-start md:justify-center pb-2">
            {allBrandSets.map((set, index) => (
              <button
                key={set.id}
                onClick={() => setActiveBrandSetIndex(index)}
                className={`px-4 py-2 font-medium transition-colors duration-300 whitespace-nowrap flex-shrink-0 rounded-t-md
                  ${
                    activeBrandSetIndex === index
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {set.label}
              </button>
            ))}
          </div>
        </div>

        <swiper-container
          key={`${activeBrandSetIndex}-${responsiveKey}`}
          class="brand-swiper w-full"
          slides-per-view="auto"
          space-between="40"
          speed="4000"
          loop="true"
          free-mode="true"
          autoplay-delay="0"
          autoplay-disable-on-interaction="false"
          autoplay-pause-on-mouse-enter="true"
        >
          {currentBrandsData.map((brand, index) => (
            <swiper-slide
              key={index}
              class="w-auto flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={`Brand ${index + 1}`}
                className="object-contain w-auto h-auto max-w-[120px] max-h-[50px] transition-transform duration-300"
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  );
}
