import React from "react";
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
  // Konfigurasi Swiper untuk mobile
  const mobileSettings = {
    modules: [Autoplay, FreeMode],
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
    allowTouchMove: false,
  };

  // Konfigurasi Swiper untuk desktop (arah normal)
  const desktopSettings1 = {
    modules: [Autoplay, FreeMode],
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
    allowTouchMove: false,
  };

  // Konfigurasi Swiper untuk desktop (arah terbalik)
  const desktopSettings2 = {
    modules: [Autoplay, FreeMode],
    speed: 10000,
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    freeMode: {
      enabled: true,
      momentum: false,
    },
    allowTouchMove: false,
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
          
          .swiper {
            width: 100%;
            padding: 20px 0;
            box-sizing: border-box;
          }
          
          .swiper-wrapper {
            transition-timing-function: linear !important;
          }
          
          .swiper-slide {
            height: auto;
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
              {/* Swiper untuk Mobile */}
              <div className="md:hidden">
                <Swiper {...mobileSettings}>
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} style={{ width: "300px" }}>
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
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Swiper untuk Desktop */}
              <div className="hidden md:block">
                {/* Swiper pertama untuk desktop */}
                <div className="py-5">
                  <Swiper {...desktopSettings1}>
                    {testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index} style={{ width: "650px" }}>
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
                              style={{
                                backgroundColor: testimonial.avatarColor,
                              }}
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
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Swiper kedua untuk desktop */}
                <div className="py-5 mt-4 md:mt-6">
                  <Swiper {...desktopSettings2}>
                    {testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index} style={{ width: "600px" }}>
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
                              style={{
                                backgroundColor: testimonial.avatarColor,
                              }}
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
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
