import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
// Menghilangkan 'Pagination' dari modul yang diimpor
import { Autoplay, FreeMode } from "swiper/modules"; // Import FreeMode

// Import Swiper styles (ensure these are accessible, e.g., via App.css or global import)
import "swiper/css";
// import "swiper/css/pagination"; // Tidak perlu lagi mengimpor gaya pagination
import "swiper/css/autoplay";
import "swiper/css/free-mode"; // Import gaya free-mode

export default function BrandSection() {
  // Data for popular brands, including name and logo URL
  const popularBrands = [
    {
      name: "TechNova",
      logo: "https://via.placeholder.com/150/FF5733/FFFFFF?text=TechNova",
    },
    {
      name: "FashionFlow",
      logo: "https://via.placeholder.com/150/33FF57/FFFFFF?text=FashionFlow",
    },
    {
      name: "HomeLux",
      logo: "https://via.placeholder.com/150/5733FF/FFFFFF?text=HomeLux",
    },
    {
      name: "GameOn",
      logo: "https://via.placeholder.com/150/FF33DA/FFFFFF?text=GameOn",
    },
    {
      name: "AudioWave",
      logo: "https://via.placeholder.com/150/33DAFF/FFFFFF?text=AudioWave",
    },
    {
      name: "FitLife",
      logo: "https://via.placeholder.com/150/DAFF33/FFFFFF?text=FitLife",
    },
    {
      name: "ElectroHub",
      logo: "https://via.placeholder.com/150/FF8C33/FFFFFF?text=ElectroHub",
    },
    {
      name: "StyleSphere",
      logo: "https://via.placeholder.com/150/33A0FF/FFFFFF?text=StyleSphere",
    },
    {
      name: "UrbanGear",
      logo: "https://via.placeholder.com/150/A033FF/FFFFFF?text=UrbanGear",
    },
    {
      name: "UrbanGear",
      logo: "https://via.placeholder.com/150/A033FF/FFFFFF?text=UrbanGear",
    },
    {
      name: "UrbanGear",
      logo: "https://via.placeholder.com/150/A033FF/FFFFFF?text=UrbanGear",
    },
    {
      name: "UrbanGear",
      logo: "https://via.placeholder.com/150/A033FF/FFFFFF?text=UrbanGear",
    },
    {
      name: "UrbanGear",
      logo: "https://via.placeholder.com/150/A033FF/FFFFFF?text=UrbanGear",
    },
    {
      name: "UrbanGear",
      logo: "https://via.placeholder.com/150/A033FF/FFFFFF?text=UrbanGear",
    },
    {
      name: "UrbanGear",
      logo: "https://via.placeholder.com/150/A033FF/FFFFFF?text=UrbanGear",
    },
  ];

  // Utility function to determine the number of slides to show per view based on screen width
  const getBrandsSlidesPerView = () => {
    // For free mode, it's often better to use 'auto' or a very large number
    // to allow Swiper to calculate based on slide width.
    // If we want a truly continuous scroll without snapping, slidesPerView should ideally be 'auto'
    // in conjunction with freeMode. However, if the user still wants the responsive behavior of
    // showing fixed number of slides, we can keep the calculation.
    // Given the request for "free mode", `slidesPerView: 'auto'` is generally preferred.
    // Let's use 'auto' for `slidesPerView` to enable true free mode.
    return "auto"; // Set to 'auto' for free mode to work effectively
  };

  // State to force re-rendering of the brand Swiper when the window is resized
  const [swiperBrandKey, setSwiperBrandKey] = useState(0);

  // Effect hook to handle window resize events
  useEffect(() => {
    const handleResize = () => {
      // Increment the key to force Swiper to re-render and re-calculate slidesPerView
      setSwiperBrandKey((prevKey) => prevKey + 1);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up: remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once on mount and cleans up on unmount

  return (
    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Our Trusted Brands
        </h2>
        <p className="text-gray-600">
          Explore products from the best brands in the industry
        </p>
      </div>
      {/* Swiper implementation for Brands */}
      <Swiper
        key={swiperBrandKey} // Key for responsive re-rendering
        modules={[Autoplay, FreeMode]} // Hanya menggunakan Autoplay dan FreeMode
        spaceBetween={20} // Space between each slide
        slidesPerView={getBrandsSlidesPerView()} // Number of slides visible at once, now 'auto'
        loop={true} // Enables infinite loop for continuous scrolling
        autoplay={{
          delay: 0, // No delay between slides, ensuring continuous movement
          disableOnInteraction: false, // Autoplay continues even if user interacts
          // Menghapus 'reverseDirection: true' agar slider bergerak ke kanan
          // Secara default, Swiper bergerak dari kiri ke kanan (atau dari awal ke akhir)
        }}
        speed={3000} // Speed of the autoplay transition in milliseconds (lower = faster)
        // pagination={{ clickable: true }} // Menghilangkan prop pagination
        freeMode={true} // <<< Mengaktifkan Free Mode >>>
        className="mySwiper brand-swiper" // Custom class for styling
      >
        {popularBrands.map((brand, index) => (
          <SwiperSlide key={index} className="brand-swiper-slide">
            <div className="flex flex-col items-center justify-center p-4">
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-24 h-24 object-contain mb-2 rounded-full border border-gray-200 p-2 transform transition-transform duration-300 hover:scale-105"
              />
              <p className="text-md font-medium text-gray-800">{brand.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
