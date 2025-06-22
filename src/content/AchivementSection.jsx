import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

export default function AchivementSection() {
  const achievements = [
    { icon: "./achievement1.png" },
    { icon: "./achievement2.png" },
    { icon: "./achievement3.png" },
    { icon: "./achievement4.png" },
    { icon: "./achievement5.png" },
  ];

  const getAchievementsSlidesPerView = () => {
    if (window.innerWidth < 640) return 3; 
    if (window.innerWidth < 768) return 4;
    return 5; 
  };

  return (
    <div className="section-achivement mb-20">
      <div className="achivement-body">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={40} 
          slidesPerView={getAchievementsSlidesPerView()} 
          loop={true} 
          autoplay={{
            delay: 0, 
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          speed= {3000} 
          freeMode={true}
          className="achivement-slider"
        >
          {achievements.map((item, index) => (
            <SwiperSlide key={index} className="achivement-slide">
              <div className="flex items-center justify-center p-4">
                <img
                  src={item.icon}
                  alt={`Achievement Icon ${index + 1}`}
                  className="w-full h-full max-w-[100px] max-h-[100px] object-contain"
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
