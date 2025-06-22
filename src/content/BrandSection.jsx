import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";

import "swiper/css/autoplay";
import "swiper/css/free-mode";

export default function BrandSection() {
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

  const allBrandSets = [
    { id: "Fashion", label: "Fashion Brands", data: popularBrands1 },
    { id: "FnB", label: "FnB Brands", data: popularBrands2 },
    { id: "Lifestyle", label: "Lifestyle Brands", data: popularBrands3 },
    { id: "Startup & Other", label: "Startup Brands", data: popularBrands4 },
    { id: "FMCGs & Corporations", label: "FMCGs Brands", data: popularBrands5 },
  ];

  const [activeBrandSetIndex, setActiveBrandSetIndex] = useState(0);
  const currentBrandsData = allBrandSets[activeBrandSetIndex].data;
  const getBrandsSlidesPerView = () => {
    return "auto";
  };

  const [responsiveKey, setResponsiveKey] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setResponsiveKey((prevKey) => prevKey + 1);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-black p-8 lg:p-12 mb-20 mx-14">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Over 800+ Business growing with Boleh Dicoba Digital
        </h2>
      </div>

      <div className="overflow-x-auto custom-scrollbar-hidden mb-8">
        <div className="flex flex-nowrap space-x-4 justify-start md:justify-center">
          {allBrandSets.map((set, index) => (
            <button
              key={set.id}
              onClick={() => setActiveBrandSetIndex(index)}
              className={`px-4 py-2 sm:px-4 sm:py-2 font-medium transition-colors duration-300 whitespace-nowrap flex-shrink-0
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

      <Swiper
        key={`${activeBrandSetIndex}-${responsiveKey}`}
        modules={[Autoplay, FreeMode]}
        spaceBetween={40} 
        slidesPerView={getBrandsSlidesPerView()}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000} 
        freeMode={true}
        className="brand-swiper" 
      >
        {currentBrandsData.map((brand, index) => (
          <SwiperSlide
            key={index}
            className="brand-swiper-slide flex justify-center items-center"
          >
            <img
              src={brand.logo}
              alt={`Brand ${index + 1} from ${
                allBrandSets[activeBrandSetIndex].label
              }`}
              className="object-contain max-w-[120px] max-h-[50px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
