import React, { useState, useEffect } from "react";
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

  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(5);
      }
    };

    // Set initial value on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Satu-satunya style yang tidak dapat dipindahkan ke Tailwind secara langsung 
        adalah untuk class '.swiper-wrapper' yang dibuat oleh library Swiper.
        Praktik terbaik adalah menempatkan style ini di file CSS global Anda (misalnya, index.css).
        Namun, untuk menjaga agar tetap berada dalam komponen, kita bisa menggunakan tag <style> minimal seperti ini.
      */}
      <style>
        {`
          .achivement-slider .swiper-wrapper {
            transition-timing-function: linear !important;
          }
        `}
      </style>
      <div
        className="
          flex flex-col bg-[#adc2e6] overflow-hidden 
          mt-[50px] mb-[70px] 
          md:flex-row md:items-center md:mt-[100px] md:mb-20
        "
      >
        {/* Swiper Body: urutan visual #2 di mobile, #1 di desktop */}
        <div
          className="
            order-2 w-[160%]
            md:flex-none md:order-1 md:w-[55vw] md:-ml-[2%]
            xl:w-[64.5vw] xl:-ml-[4%]
          "
        >
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={40}
            slidesPerView={slidesPerView}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            speed={3000}
            freeMode={true}
            className="achivement-slider"
          >
            {achievements.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4">
                  <img
                    src={item.icon}
                    alt={`Achievement Icon ${index + 1}`}
                    className="
                      object-contain w-full h-full 
                      max-w-[80px] max-h-[80px] 
                      md:max-w-[100px] md:max-h-[100px]
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Header Content: urutan visual #1 di mobile, #2 di desktop */}
        <div
          className="
            order-1 w-full px-[15px] mb-[30px] 
            md:flex-none md:order-2 md:w-[42.817vw] md:py-[70px] md:pr-[70px] md:pl-[50px] md:border-l-2 md:border-[#222] md:z-10 md:mb-0
            xl:w-[38.1vw] xl:pr-[195px]
          "
        >
          <div className="mb-4">
            <p className="m-0 text-[#513b6a] font-medium leading-normal text-center text-base md:text-right md:text-sm">
              WE ON NUMBERS
            </p>
          </div>
          <div>
            <h2 className="m-0 text-[#222] font-normal text-center text-2xl leading-7 md:text-right md:text-[32px] md:leading-normal xl:text-4xl">
              We Establish an Ecosystem to Enhance Brand Growth.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
