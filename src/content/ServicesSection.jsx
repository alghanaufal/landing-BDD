import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function OurServices() {
  const servicesData = [
    {
      title: "Digital Advertising",
      description:
        "Capai pertumbuhan optimal Anda melalui Iklan Digital dengan strategi yang dapat ditindaklanjuti dan berdampak.",
      link: "https://bolehdicoba.com/services/digital-advertising/",
      image:
        "https://bolehdicoba.com/wp-content/uploads/2024/07/Frame-770432-2.png",
      alt: "Digital Advertising",
      bgColor: "#C8D6EE",
      textColor: "#222",
    },
    {
      title: "Konten Kreatif & Live Shopping",
      description:
        "Kreatif kinerja menghadirkan proses berbasis data dan teknologi yang dirancang untuk memperkuat dampak dari materi kreatif itu sendiri.",
      link: "services/performance-creative",
      image:
        "https://bolehdicoba.com/wp-content/uploads/2024/07/Group-40596-1.png",
      alt: "Konten Kreatif & Live Shopping",
      bgColor: "rgb(34, 34, 34)",
      textColor: "rgb(255, 255, 255)",
    },
    {
      title: "Pengembangan & Pemeliharaan Web",
      description:
        "Kami merancang dan mengembangkan situs web yang paling sesuai untuk bisnis Anda untuk membantu Anda menjual produk dan layanan Anda secara efektif.",
      link: "https://bolehdicoba.com/services/website-development/",
      image:
        "https://bolehdicoba.com/wp-content/uploads/2024/07/Group-40597-1.png",
      alt: "Pengembangan & Pemeliharaan Web",
      bgColor: "rgb(192, 233, 227)",
      textColor: "rgb(34, 34, 34)",
    },
    {
      title: "Optimisasi Mesin Pencari (SEO)",
      description:
        "SEO adalah investasi jangka panjang dalam pemasaran untuk mendorong lalu lintas organik dan melambungkan peringkat situs web.",
      link: "https://bolehdicoba.com/services/seo/",
      image:
        "https://bolehdicoba.com/wp-content/uploads/2024/07/Group-40598-1.png",
      alt: "Optimisasi Mesin Pencari (SEO)",
      bgColor: "rgb(201, 194, 209)",
      textColor: "rgb(34, 34, 34)",
    },
    {
      title: "Layanan Profesional",
      description:
        "Growth Hack adalah seni memilih audiens, penawaran, dan strategi yang tepat. Apakah Anda akan mempercayai kami untuk membimbing Anda melaluinya?",
      link: "https://bolehdicoba.com/services/professional-service/",
      image:
        "https://bolehdicoba.com/wp-content/uploads/2024/07/Group-40599-1.png",
      alt: "Layanan Profesional",
      bgColor: "rgb(254, 203, 199)",
      textColor: "rgb(34, 34, 34)",
    },
    {
      title: "Pengembangan Program Komunitas",
      description:
        "Kami membantu bisnis untuk mempertahankan pelanggan, dan mendorong mereka untuk menjelajahi lebih banyak produk dan layanan Anda.",
      link: "https://bolehdicoba.com/services/community-program-development/",
      image:
        "https://bolehdicoba.com/wp-content/uploads/2024/07/Group-40600-1.png",
      alt: "Pengembangan Program Komunitas",
      bgColor: "rgb(255, 231, 200)",
      textColor: "rgb(34, 34, 34)",
    },
    {
      title: "Pelatihan Pemasaran Digital oleh Boleh Belajar",
      description:
        "Program pelatihan yang disesuaikan dibimbing oleh para ahli dan profesional industri.",
      link: "https://bolehbelajar.com/",
      image:
        "https://bolehdicoba.com/wp-content/uploads/2024/07/Group-40601-1.png",
      alt: "Pelatihan Pemasaran Digital oleh Boleh Belajar",
      bgColor: "rgb(241, 237, 229)",
      textColor: "rgb(34, 34, 34)",
    },
  ];
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !pinWrapperRef.current) return;

      const container = containerRef.current;
      const pinWrapper = pinWrapperRef.current;

      const containerRect = container.getBoundingClientRect();
      const pinWrapperRect = pinWrapper.getBoundingClientRect();

      // Calculate scroll progress within the pin wrapper
      const scrollStart = -containerRect.top;
      const scrollEnd = containerRect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate current active card based on scroll progress
  const currentCard = Math.floor(scrollProgress * servicesData.length);
  const activeCard = Math.min(currentCard, servicesData.length - 1);

  return (
    <div className="min-h-screen">
      {/* Pin Spacer Container */}
      <div
        ref={containerRef}
        className="relative"
        style={{
          height: `${100 + (servicesData.length - 1) * 100}vh`, // Total height for pinning
        }}
      >
        {/* Pin Wrapper - This gets pinned */}
        <div
          ref={pinWrapperRef}
          className="sticky top-0 h-screen overflow-hidden"
        >
          {/* Cards Container */}
          <div ref={cardsRef} className="relative w-full h-full">
            {servicesData.map((service, index) => {
              // Calculate progress for each card
              const cardStartProgress = index / servicesData.length;
              const cardEndProgress = (index + 1) / servicesData.length;

              // Determine card state
              const isCurrent =
                scrollProgress >= cardStartProgress &&
                scrollProgress < cardEndProgress;
              const isPast = scrollProgress >= cardEndProgress;
              const isFuture = scrollProgress < cardStartProgress;

              // Calculate individual card progress within its range
              const cardProgress = isCurrent
                ? (scrollProgress - cardStartProgress) /
                  (cardEndProgress - cardStartProgress)
                : isPast
                ? 1
                : 0;

              // Transform calculations for stack effect
              let translateY = 0;
              let scale = 1;
              let rotateX = 0;
              let zIndex = servicesData.length - index;
              let pointerEvents = "auto";

              if (isFuture) {
                // Cards that haven't appeared yet - start from front
                // translateY = 100; // Start from below
                scale = 0.9;
                zIndex = index; // Lower z-index for future cards
                pointerEvents = "none"; // Disable interaction for future cards
              } else if (isCurrent) {
                // Current card being animated
                translateY = 0;
                scale = 1;
                zIndex = servicesData.length + 10; // Highest z-index for current card
                pointerEvents = "auto"; // Enable interaction for current card
              } else if (isPast) {
                // Cards that have passed - move to back with stacking effect
                translateY = -cardProgress * 100; // Slight upward movement
                scale = 1 - cardProgress * 0.05; // Subtle scale down
                rotateX = cardProgress * -5;
                zIndex = servicesData.length - index - 1; // Lower z-index for past cards
                pointerEvents = "none"; // Disable interaction for past cards
              }

              if (isCurrent && cardProgress > 0) {
                const nextIndex = index + 1;
                if (nextIndex < servicesData.length) {
                  translateY = -cardProgress * 100;
                  scale = 1 - cardProgress * 0.1;
                  rotateX = -cardProgress * 10;
                  pointerEvents = cardProgress < 0.8 ? "auto" : "none";
                }
              }

              return (
                <div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out"
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`,
                    zIndex: zIndex,
                    transformOrigin: "center center",
                    transformStyle: "preserve-3d",
                    pointerEvents: pointerEvents,
                  }}
                >
                  <div className="w-full mx-auto px-4">
                    <div
                      className="rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative"
                      style={{
                        backgroundColor: service.bgColor,
                        color: service.textColor,
                        height: "80vh",
                        boxShadow:
                          isCurrent || isFuture
                            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                            : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
                        {/* Left Content */}
                        <div className="space-y-6 lg:space-y-8">
                          <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                              {service.title}
                            </h2>
                            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                              {service.description}
                            </p>
                          </div>

                          <button
                            className="bg-orange-500 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 group relative cursor-pointer"
                            onClick={() => {
                              console.log(`Clicked on ${service.title}`);
                              // Add your click handler here
                              if (service.link) {
                                window.open(service.link, "_blank");
                              }
                            }}
                            style={{
                              pointerEvents: "auto",
                              zIndex: 10,
                            }}
                          >
                            <span>See Detail Service</span>
                            <svg
                              className="w-5 h-5 transition-transform group-hover:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </button>
                        </div>

                        {/* Right Content - Image */}
                        <div className="flex justify-center lg:justify-center">
                          <div className="relative">
                            <img
                              src={service.image}
                              alt={service.alt}
                              className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain transition-transform duration-700 ease-out hover:scale-105"
                              style={{
                                filter:
                                  service.bgColor === "rgb(34, 34, 34)"
                                    ? "brightness(1.1)"
                                    : "none",
                              }}
                            />
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>
                            <div
                              className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-pulse"
                              style={{ animationDelay: "1s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
