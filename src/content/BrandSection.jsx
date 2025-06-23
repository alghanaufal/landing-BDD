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
    { id: "Fashion", label: "Fashion Brands", data: loopedBrands },
    { id: "FnB", label: "FnB Brands", data: loopedBrands },
    { id: "Lifestyle", label: "Lifestyle Brands", data: loopedBrands },
    { id: "Startup & Other", label: "Startup Brands", data: loopedBrands },
    { id: "FMCGs & Corporations", label: "FMCGs Brands", data: loopedBrands },
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
    <div className="flex items-center justify-center p-4 font-sans">
      <style>
        {`
          .custom-scrollbar-hidden::-webkit-scrollbar {
            display: none; /* for Chrome, Safari, and Opera */
          }
          .custom-scrollbar-hidden {
            -ms-overflow-style: none;  /* for IE and Edge */
            scrollbar-width: none;  /* for Firefox */
          }
          .brand-swiper::part(wrapper) {
            transition-timing-function: linear !important;
            padding-bottom: 0.5rem;
          }
        `}
      </style>
      <div className="bg-white rounded-2xl border border-black p-8 lg:p-12 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Over 800+ Businesses growing with Boleh Dicoba Digital
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
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/120x50/ef4444/ffffff?text=Error";
                }}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  );
}
