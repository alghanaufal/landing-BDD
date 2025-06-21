import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

export default function AchivementSection() {
  // Data untuk item pencapaian
  const achievements = [
    { icon: "./achievement1.png" },
    { icon: "./achievement2.png" },
    { icon: "./achievement3.png" },
    { icon: "./achievement4.png" },
    { icon: "./achievement5.png" },
  ];

  // Utility function untuk menentukan slidesPerView untuk slider pencapaian
  const getAchievementsSlidesPerView = () => {
    // Sesuaikan ini jika Anda ingin lebih banyak slide terlihat di layar yang lebih besar
    if (window.innerWidth < 640) return 3; // 3 item di mobile
    if (window.innerWidth < 768) return 4; // 4 item di tablet
    return 5; // 5 item di desktop (disesuaikan dengan kebutuhan)
  };

  return (
    <div className="section-achivement mb-20">
      {/* Bagian Kanan: Body Pencapaian dengan Slider */}
      <div className="achivement-body">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={40} // Jarak antar slide
          slidesPerView={getAchievementsSlidesPerView()} // Jumlah slide yang terlihat
          loop={true} // Loop tak terbatas
          autoplay={{
            delay: 0, // Tanpa jeda
            disableOnInteraction: false,
            reverseDirection: false, // Bergerak ke kanan
          }}
          speed= {3000} // Kecepatan autoplay yang disesuaikan
          freeMode={true} // Mengaktifkan mode bebas
          className="achivement-slider"
        >
          {achievements.map((item, index) => (
            <SwiperSlide key={index} className="achivement-slide">
              <div className="flex items-center justify-center p-4">
                <img
                  src={item.icon}
                  alt={`Achievement Icon ${index + 1}`}
                  className="w-full h-auto max-w-[100px] max-h-[100px] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="achivement-header">
        <div className="achivement-subtitle">
          <p className="subtitle">WE ON NUMBERS</p>
        </div>
        <div className="achivement-title">
          <h2 className="title">
            We Establish an Ecosystem to Enhance Brand Growth.
          </h2>
        </div>
      </div>
    </div>
  );
}
