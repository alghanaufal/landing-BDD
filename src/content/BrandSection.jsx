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

  // State untuk melacak tab aktif saat ini (menggunakan indeks)
  const [activeBrandSetIndex, setActiveBrandSetIndex] = useState(0);
  // Mengambil data merek yang sesuai dengan tab aktif
  const currentBrandsData = allBrandSets[activeBrandSetIndex].data;

  // Utility function to determine the number of slides to show per view based on screen width
  const getBrandsSlidesPerView = () => {
    return "auto"; // Set to 'auto' for free mode to work effectively
  };

  // State untuk memaksa rendering ulang Swiper merek saat ukuran jendela diubah
  const [responsiveKey, setResponsiveKey] = useState(0);

  // Effect hook untuk menangani event perubahan ukuran jendela
  useEffect(() => {
    const handleResize = () => {
      // Tingkatkan kunci untuk memaksa Swiper merender ulang dan menghitung ulang slidesPerView
      setResponsiveKey((prevKey) => prevKey + 1);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Array dependensi kosong berarti efek ini hanya berjalan sekali saat mount dan membersihkan saat unmount

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

      {/* Bagian Nav-Tabs yang dapat digulir */}
      <div className="overflow-x-auto custom-scrollbar-hidden mb-8">
        {" "}
        {/* custom-scrollbar-hidden hides scrollbar */}
        <div className="flex flex-nowrap space-x-2 sm:space-x-4 justify-center md:justify-start lg:justify-center">
          {" "}
          {/* flex-nowrap prevents wrapping */}
          {allBrandSets.map((set, index) => (
            <button
              key={set.id}
              onClick={() => setActiveBrandSetIndex(index)}
              className={`px-4 py-2 sm:px-6 sm:py-2 rounded-full font-medium transition-colors duration-300 whitespace-nowrap flex-shrink-0
                ${
                  activeBrandSetIndex === index
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {set.label}
            </button>
          ))}
        </div>
      </div>

      {/* Implementasi Swiper untuk Merek */}
      <Swiper
        // Menggunakan kunci gabungan untuk memaksa rendering ulang ketika tab berubah ATAU jendela diubah
        key={`${activeBrandSetIndex}-${responsiveKey}`}
        modules={[Autoplay, FreeMode]} // Hanya menggunakan Autoplay dan FreeMode
        spaceBetween={20} // Ruang antar slide
        slidesPerView={getBrandsSlidesPerView()} // Jumlah slide yang terlihat sekaligus, sekarang 'auto'
        loop={true} // Mengaktifkan loop tak terbatas untuk pengguliran berkelanjutan
        autoplay={{
          delay: 0, // Tanpa jeda antar slide, memastikan pergerakan berkelanjutan
          disableOnInteraction: false, // Autoplay berlanjut bahkan setelah interaksi pengguna
          // speed: 6000, // Kecepatan transisi autoplay dalam milidetik (nilai lebih tinggi = lebih halus dan lambat)
        }}
        speed={3000}
        freeMode={true} // Mengaktifkan Mode Bebas
        className="mySwiper brand-swiper" // Kelas khusus untuk penataan gaya
      >
        {currentBrandsData.map((brand, index) => (
          <SwiperSlide key={index} className="brand-swiper-slide">
            <div className="flex flex-col items-center justify-center p-4">
              <img
                src={brand.logo}
                alt={`Brand ${index + 1} from ${
                  allBrandSets[activeBrandSetIndex].label
                }`} // Alt attribute yang lebih deskriptif
                className="w-24 h-24 object-contain mb-2 rounded-full border border-gray-200 p-2 transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
