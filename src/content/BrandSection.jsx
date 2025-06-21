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
    // Set to 'auto' for free mode to work effectively with variable slide widths
    return "auto";
  };

  // State untuk memaksa rendering ulang Swiper merek saat ukuran jendela diubah
  const [responsiveKey, setResponsiveKey] = useState(0);

  // Effect hook untuk menangani event perubahan ukuran jendela
  useEffect(() => {
    const handleResize = () => {
      // Tingkatkan kunci untuk memaksa Swiper merender ulang
      setResponsiveKey((prevKey) => prevKey + 1);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white rounded-2xl border border-black p-8 lg:p-12 mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Over 800+ Business growing with Boleh Dicoba Digital
        </h2>
        {/* Deskripsi di gambar tidak ada, jadi dihilangkan */}
      </div>

      {/* Bagian Nav-Tabs yang dapat digulir (sesuai mobile image) */}
      <div className="overflow-x-auto custom-scrollbar-hidden mb-8">
        <div className="flex flex-nowrap space-x-4 justify-start md:justify-center">
          {allBrandSets.map((set, index) => (
            <button
              key={set.id}
              onClick={() => setActiveBrandSetIndex(index)}
              className={`px-4 py-2 sm:px-4 sm:py-2 font-medium transition-colors duration-300 whitespace-nowrap flex-shrink-0
                ${
                  activeBrandSetIndex === index
                    ? "text-blue-600 border-b-2 border-blue-600" // Gaya aktif dengan underline
                    : "text-gray-600 hover:text-gray-900" // Gaya tidak aktif
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
        modules={[Autoplay, FreeMode]}
        spaceBetween={40} // Meningkatkan spasi antar logo agar lebih mirip gambar desktop
        slidesPerView={getBrandsSlidesPerView()}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000} // Kecepatan autoplay untuk gerakan sangat mulus
        freeMode={true}
        className="brand-swiper" // Menambah padding bawah untuk ruang di bawah logo
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
              // Kelas disederhanakan, sesuaikan w- h- jika perlu untuk ukuran logo yang tepat
              className="object-contain max-w-[120px] max-h-[50px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
