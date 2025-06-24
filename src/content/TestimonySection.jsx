import React, { useEffect, useState } from "react";
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
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    // Function to calculate maximum height of content items
    const calculateMaxHeight = () => {
      let currentMaxHeight = 0;
      const contentItems = document.querySelectorAll(
        ".testimonial-content-item"
      );
      contentItems.forEach((item) => {
        const height = item.offsetHeight;
        if (height > currentMaxHeight) {
          // Adjust based on screen width like original JS logic
          if (window.screen.width > 750) {
            currentMaxHeight = height + 20;
          } else {
            currentMaxHeight = height + 5;
          }
        }
      });
      setMaxHeight(currentMaxHeight);
    };

    // Calculate maximum height on initialization and when window size changes
    calculateMaxHeight();
    window.addEventListener("resize", calculateMaxHeight);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", calculateMaxHeight);
    };
  }, []); // Empty dependency means effect runs only once after initial render

  return (
    <>
      <style>
        {`
          /* Custom styles for Swiper that can't be converted to Tailwind */
          .swiper-container .swiper-wrapper, .swiper-container1 .swiper-wrapper {
            transition-timing-function: linear !important;
            pointer-events: none;
          }
          .swiper-container, .swiper-container1 {
            width: 100%;
            padding: 20px 0;
            box-sizing: border-box;
          }
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
        `}
      </style>

      {/* Main testimonial section */}
      <div className="border-t-2 border-b-2 border-gray-900 w-full font-inter">
        <div className="flex justify-center w-full overflow-hidden">
          <div className="flex flex-col items-center w-full">
            {/* Testimonial heading section */}
            <div className="text-center w-full px-4">
              <h5 className="text-sm md:text-base text-gray-900 m-0 p-0">
                FROM OUR NOTABLE CLIENTS
              </h5>
              <h3 className="text-2xl md:text-4xl lg:text-5xl text-gray-900 m-0 p-0 font-normal mt-2 mb-4 md:mt-1 md:mb-6">
                800+ business have experienced the result
              </h3>
            </div>

            {/* Testimonial marquee section */}
            <div className="w-full">
              <div className="relative overflow-hidden min-h-[20vh] md:min-h-[50vh]">
                {/* Mobile Swiper (runs to the left, only visible on mobile) */}
                <Swiper
                  modules={[Autoplay, FreeMode]}
                  spaceBetween={20}
                  centeredSlides={true}
                  autoplay={{
                    reverseDirection: true,
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  speed={8000}
                  loop={true}
                  slidesPerView={"auto"}
                  freeMode={true}
                  freeModeMomentum={false}
                  className="swiper-container w-full py-5 md:hidden"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide
                      key={index}
                      className="testimonial-content-item p-4 border-2 border-black flex flex-col rounded-lg bg-white box-border mx-3"
                      style={{
                        height: "350px",
                        width: "300px",
                        boxShadow: "4px 4px 0px 0px #222",
                      }}
                    >
                      <div className="flex items-center">
                        <div
                          className="w-12 h-12 flex rounded-full justify-center items-center text-white text-lg"
                          style={{
                            backgroundColor: testimonial.avatarColor,
                          }}
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
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Desktop Swiper (runs to the right, hidden on mobile) */}
                <Swiper
                  modules={[Autoplay, FreeMode]}
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  speed={10000}
                  loop={true}
                  slidesPerView={"auto"}
                  freeMode={true}
                  freeModeMomentum={false}
                  className="swiper-container w-full py-5 hidden md:block"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide
                      key={index}
                      className="testimonial-content-item p-8 border border-black flex flex-col rounded-xl bg-white box-border mx-6"
                      style={{
                        height: "350px",
                        width: "650px",
                        boxShadow: "4px 4px 0px 0px #222",
                      }}
                    >
                      <div className="flex items-center">
                        <div
                          className="w-16 h-16 lg:w-20 lg:h-20 flex rounded-full justify-center items-center text-white text-xl lg:text-2xl"
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
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Second Desktop Swiper (runs to the left, hidden on mobile) */}
                <Swiper
                  modules={[Autoplay, FreeMode]}
                  spaceBetween={30}
                  direction="horizontal"
                  centeredSlides={true}
                  autoplay={{
                    reverseDirection: true,
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  speed={10000}
                  loop={true}
                  slidesPerView={"auto"}
                  freeMode={true}
                  freeModeMomentum={false}
                  className="swiper-container1 w-full py-5 hidden md:block mt-4 md:mt-6"
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide
                      key={index}
                      className="testimonial-content-item p-8 border border-black flex flex-col rounded-xl bg-white box-border mx-6"
                      style={{
                        height: "300px",
                        width: "600px",
                        boxShadow: "4px 4px 0px 0px #222",
                      }}
                    >
                      <div className="flex items-center">
                        <div
                          className="w-16 h-16 lg:w-20 lg:h-20 flex rounded-full justify-center items-center text-white text-xl lg:text-2xl"
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
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
