import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// Testimonial data
const testimonials = [
  {
    name: "Kitschy",
    avatarColor: "#676022",
    text: "Sangat senang dengan team BDD yang responsif dan komunikatif, sangat bisa kasih suggestion untuk improvement Kitschy.",
  },
  {
    name: "CRSL",
    avatarColor: "#df7d3c",
    text: "Selama jalan 3 tahun, sangat terbantu, ada dampak yang cukup signifikan dalam meningkat sales apalagi CPASnya. Sudah oke dari segi rekomendasi dan komunikasi.",
  },
  {
    name: "COTTONINK",
    avatarColor: "#ce2bbc",
    text: "BDD sangat aktif buat ngasih insight dan rekomendasi terkait ads, Selama jalan kurang lebih 3 tahun udah nemu formula winning campaign nya, Dari sisi performance juga cukup oke, teknis pengerjaan dan inisiatif strategi nya bagus. Overall puas dengan BDD lewat service ads dan TikTok live nya. Sangat terbantu dari sisi digital marketing dan semoga bisa semakin growth lagi kedepannya.",
  },
  {
    name: "Lotus Archi",
    avatarColor: "#d46aa2",
    text: "Kita sudah jalan 2 tahun dengan pelayanan dari tim BDD dan cukup puas dengan pelayanan yang diberikan. Adanya insight setiap bulan dan performance online sale yang perlahan-lahan mulai ada peningkatan juga jadi faktor yang mempertahankan kerja sama antara brand Lotus Archi Gold dan juga BDD.",
  },
  {
    name: "Holycow",
    avatarColor: "#f53c6b",
    text: "Terima kasih banyak ya BDD untuk service digital marketingnya yang ciamik! Kami sangat terbantu dengan deliverables yang sudah diberikan BDD pada perkembangan presensi digital kami.",
  },
  {
    name: "CRSL",
    avatarColor: "#5d342c",
    text: "Selama jalan 3 tahun, sangat terbantu, ada dampak yang cukup signifikan dalam meningkat sales apalagi CPASnya. Sudah oke dari segi rekomendasi dan komunikasi.",
  },
  {
    name: "COTTONINK",
    avatarColor: "#9130e2",
    text: "BDD sangat aktif buat ngasih insight dan rekomendasi terkait ads, Selama jalan kurang lebih 3 tahun udah nemu formula winning campaign nya, Dari sisi performance juga cukup oke, teknis pengerjaan dan inisiatif strategi nya bagus. Overall puas dengan BDD lewat service ads dan TikTok live nya. Sangat terbantu dari sisi digital marketing dan semoga bisa semakin growth lagi kedepannya.",
  },
  {
    name: "Lotus Archi",
    avatarColor: "#0a88cf",
    text: "Kita sudah jalan 2 tahun dengan pelayanan dari tim BDD dan cukup puas dengan pelayanan yang diberikan. Adanya insight setiap bulan dan performance online sale yang perlahan-lahan mulai ada peningkatan juga jadi faktor yang mempertahankan kerja sama antara brand Lotus Archi Gold dan juga BDD.",
  },
  {
    name: "Holycow",
    avatarColor: "#b40455",
    text: "Terima kasih banyak ya BDD untuk service digital marketingnya yang ciamik! Kami sangat terbantu dengan deliverables yang sudah diberikan BDD pada perkembangan presensi digital kami.",
  },
  {
    name: "Kitschy",
    avatarColor: "#65e14d",
    text: "Sangat senang dengan team BDD yang responsif dan komunikatif, sangat bisa kasih suggestion untuk improvement Kitschy.",
  },
];

export default function TestimonialSection() {
  const swiperMobileRef = useRef(null);
  const swiperDesktop1Ref = useRef(null);
  const swiperDesktop2Ref = useRef(null);

  // useEffect untuk memuat skrip Swiper dan menginisialisasi
  useEffect(() => {
    // Memuat skrip Swiper dari CDN
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Konfigurasi untuk setiap swiper
      const mobileParams = {
        speed: 8000,
        spaceBetween: 20,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        freeMode: {
          enabled: true,
          momentum: false,
        },
        injectStyles: [
          `
                .swiper-wrapper {
                    transition-timing-function: linear !important;
                    pointer-events: none;
                }
            `,
        ],
      };

      const desktop1Params = {
        speed: 10000,
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        freeMode: {
          enabled: true,
          momentum: false,
        },
        injectStyles: [
          `
                .swiper-wrapper {
                    transition-timing-function: linear !important;
                    pointer-events: none;
                }
            `,
        ],
      };

      const desktop2Params = {
        ...desktop1Params, // Salin konfigurasi dari desktop 1
        autoplay: {
          // Timpa konfigurasi autoplay
          ...desktop1Params.autoplay,
          reverseDirection: true,
        },
      };

      // Menginisialisasi setiap swiper setelah skrip dimuat
      if (swiperMobileRef.current) {
        Object.assign(swiperMobileRef.current, mobileParams);
        swiperMobileRef.current.initialize();
      }
      if (swiperDesktop1Ref.current) {
        Object.assign(swiperDesktop1Ref.current, desktop1Params);
        swiperDesktop1Ref.current.initialize();
      }
      if (swiperDesktop2Ref.current) {
        Object.assign(swiperDesktop2Ref.current, desktop2Params);
        swiperDesktop2Ref.current.initialize();
      }
    };

    // Cleanup function untuk menghapus skrip saat komponen di-unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
          /* Gaya tambahan untuk memastikan tata letak yang benar */
          swiper-container {
            width: 100%;
            padding: 20px 0;
            box-sizing: border-box;
          }
        `}
      </style>

      {/* Bagian utama testimoni */}
      <div className="border-t-2 border-b-2 border-gray-900 w-full font-inter overflow-hidden">
        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center w-full py-10 md:py-16">
            {/* Judul testimoni */}
            <div className="text-center w-full px-4">
              <h5 className="text-sm md:text-base text-gray-900 m-0 p-0 tracking-wider">
                FROM OUR NOTABLE CLIENTS
              </h5>
              <h3 className="text-2xl md:text-4xl lg:text-5xl text-gray-900 m-0 p-0 font-normal mt-2 mb-4 md:mt-1 md:mb-10">
                800+ business have experienced the result
              </h3>
            </div>

            {/* Bagian marquee testimoni */}
            <div className="w-full relative">
              {/* Swiper untuk Mobile menggunakan Web Component */}
              <div className="md:hidden">
                <swiper-container ref={swiperMobileRef} init="false">
                  {testimonials.map((testimonial, index) => (
                    <swiper-slide key={index} style={{ width: "300px" }}>
                      <div
                        className="p-4 border-2 border-black flex flex-col rounded-lg bg-white box-border h-full"
                        style={{
                          minHeight: "250px",
                          boxShadow: "4px 4px 0px 0px #222",
                        }}
                      >
                        <div className="flex items-center">
                          <div
                            className="w-12 h-12 flex-shrink-0 flex rounded-full justify-center items-center text-white text-lg"
                            style={{ backgroundColor: testimonial.avatarColor }}
                          >
                            {testimonial.name.charAt(0)}
                          </div>
                          <div className="ml-3">
                            <p className="font-medium text-sm m-0 p-0 text-gray-900">
                              {testimonial.name}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm font-light leading-relaxed mt-4 text-gray-900">
                          {testimonial.text}
                        </p>
                      </div>
                    </swiper-slide>
                  ))}
                </swiper-container>
              </div>

              {/* Swiper untuk Desktop menggunakan Web Component */}
              <div className="hidden md:block">
                {/* Swiper pertama untuk desktop */}
                <swiper-container
                  ref={swiperDesktop1Ref}
                  init="false"
                  className="w-full py-5"
                >
                  {testimonials.map((testimonial, index) => (
                    <swiper-slide key={index} style={{ width: "650px" }}>
                      <div
                        className="p-8 border-2 border-black flex flex-col rounded-xl bg-white box-border h-full"
                        style={{
                          minHeight: "280px",
                          boxShadow: "4px 4px 0px 0px #222",
                        }}
                      >
                        <div className="flex items-center">
                          <div
                            className="w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 flex rounded-full justify-center items-center text-white text-xl lg:text-2xl"
                            style={{ backgroundColor: testimonial.avatarColor }}
                          >
                            {testimonial.name.charAt(0)}
                          </div>
                          <div className="ml-4 lg:ml-6">
                            <p className="font-medium text-base lg:text-lg m-0 p-0 text-gray-900">
                              {testimonial.name}
                            </p>
                          </div>
                        </div>
                        <p className="text-base lg:text-lg font-light leading-relaxed mt-6 lg:mt-8 text-gray-900">
                          {testimonial.text}
                        </p>
                      </div>
                    </swiper-slide>
                  ))}
                </swiper-container>

                {/* Swiper kedua untuk desktop */}
                <swiper-container
                  ref={swiperDesktop2Ref}
                  init="false"
                  className="w-full py-5 mt-4 md:mt-6"
                >
                  {testimonials.map((testimonial, index) => (
                    <swiper-slide key={index} style={{ width: "600px" }}>
                      <div
                        className="p-8 border-2 border-black flex flex-col rounded-xl bg-white box-border h-full"
                        style={{
                          minHeight: "280px",
                          boxShadow: "4px 4px 0px 0px #222",
                        }}
                      >
                        <div className="flex items-center">
                          <div
                            className="w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0 flex rounded-full justify-center items-center text-white text-xl lg:text-2xl"
                            style={{ backgroundColor: testimonial.avatarColor }}
                          >
                            {testimonial.name.charAt(0)}
                          </div>
                          <div className="ml-4 lg:ml-6">
                            <p className="font-medium text-base lg:text-lg m-0 p-0 text-gray-900">
                              {testimonial.name}
                            </p>
                          </div>
                        </div>
                        <p className="text-base lg:text-lg font-light leading-relaxed mt-6 lg:mt-8 text-gray-900">
                          {testimonial.text}
                        </p>
                      </div>
                    </swiper-slide>
                  ))}
                </swiper-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
