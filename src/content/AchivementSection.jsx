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

  // useEffect untuk memuat script dan style Swiper secara dinamis
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

    // Fungsi cleanup untuk menghapus script dan link saat komponen dibongkar
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []); // Array dependensi kosong memastikan ini hanya berjalan sekali

  // useEffect untuk mengatur slidesPerView secara responsif
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

    handleResize(); // Atur nilai awal
    window.addEventListener("resize", handleResize); // Tambahkan listener

    // Cleanup listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <style>
        {`
          /* Style untuk memastikan transisi linear untuk continuous scroll */
          .achivement-slider .swiper-wrapper {
            transition-timing-function: linear !important;
          }
        `}
      </style>
      <div
        className="
          border-t-2 border-b-2 border-gray-900
          flex flex-col bg-[#adc2e6] overflow-hidden 
          mt-[50px] mb-[70px] 
          md:flex-row md:items-center md:mt-[100px] md:mb-20
        "
      >
        {/* Badan Swiper: urutan visual #2 di mobile, #1 di desktop */}
        <div
          className="
            order-2 w-[160%]
            md:flex-none md:order-1 md:w-[55vw] md:-ml-[2%]
            lg:w-[64.5vw] lg:-ml-[4%]
          "
        >
          {/* Menggunakan Swiper Web Component (swiper-container) */}
          <swiper-container
            class="achivement-slider py-4"
            slides-per-view={slidesPerView}
            space-between="40"
            speed="3000"
            loop="true"
            free-mode="true"
            autoplay-delay="0"
            autoplay-disable-on-interaction="false"
          >
            {achievements.map((item, index) => (
              <swiper-slide key={index}>
                <div className="flex items-center justify-center p-4">
                  <img
                    src={item.icon}
                    alt={`Achievement Icon ${index + 1}`}
                    className="object-contain w-full h-full"
                  />
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>

        {/* Konten Header: urutan visual #1 di mobile, #2 di desktop */}
        <div
          className="
            order-1 w-full px-[15px] mb-[30px] 
            md:flex-none md:order-2 md:w-[42.817vw] md:py-[70px] md:pr-[70px] md:pl-[50px] md:border-l-2 md:border-[#222] md:z-10 md:mb-0
            lg:w-[38.1vw] lg:pr-[125px]
          "
        >
          <div className="mb-4">
            <p className="m-0 text-[#513b6a] font-medium leading-normal text-center text-base md:text-right md:text-sm">
              WE ON NUMBERS
            </p>
          </div>
          <div>
            <h2 className="m-0 text-[#222] font-normal text-center text-2xl leading-7 md:text-right md:text-[32px] md:leading-normal lg:text-4xl">
              We Establish an Ecosystem to Enhance Brand Growth.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
