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
    <>
      <style>
        {`/* Custom styles provided by the user */
      .section-services {
        padding: 100px 50px 0;
        overflow: hidden; /* Ensure no horizontal scroll from animations */
      }
      .services-header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        max-width: 1050px;
        margin: 0 auto 50px;
      }
      .services-subtitle {
        margin-bottom: 14px;
      }
      .services-subtitle .subtitle {
        color: #222;
        font-size: 14px;
        font-weight: 500;
        line-height: normal;
        margin: 0;
      }
      .services-title .title {
        color: #222;
        font-size: 44px;
        font-weight: 400;
        line-height: normal;
        margin: 0;
      }
      .services-description .description {
        color: #222;
        font-size: 16px;
        font-weight: 300;
        line-height: normal;
        margin: 0;
      }

      /* Styles for ScrollTrigger pinning and card animations */
      .services-list {
        display: flex;
        flex-direction: column;
        position: relative; /* Keep relative for absolute children */
        width: 100%;
        /* min-height and max-height will be managed by ScrollTrigger's pin */
      }
      .services-card {
        position: absolute; /* Keep absolute for stacking/overlay effect */
        top: 0; /* Cards start at the top of their parent (.services-list) */
        left: 0;
        right: 0;
        width: 100%;
        height: 540px; /* Fixed height for each card */
        border: 2px solid #222;
        border-radius: 16px;
        display: flex;
        align-items: center;
        opacity: 0; /* Start hidden for reveal animation */
        transform: translateY(50px); /* Start slightly below for slide-up effect */
        pointer-events: none; /* Disable interaction until active */
        transition: background-color 0.3s ease, color 0.3s ease; /* For background color transitions */
      }

      /* Ensure correct z-index for stacked cards, from back to front */
      .services-card-0 {
        z-index: 6;
      }
      .services-card-1 {
        z-index: 5;
      }
      .services-card-2 {
        z-index: 4;
      }
      .services-card-3 {
        z-index: 3;
      }
      .services-card-4 {
        z-index: 2;
      }
      .services-card-5 {
        z-index: 1;
      }

      .services-card.active {
        pointer-events: auto; /* Enable interaction for the active card */
      }

      .services-card-inner {
        max-width: 1050px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 50px;
        padding: 20px;
      }
      .services-card-title {
        margin-bottom: 20px;
      }
      .services-card-title .title {
        font-size: 44px;
        font-weight: 400;
        line-height: normal;
        margin: 0;
      }
      .services-card-description {
        margin-bottom: 70px;
      }
      .services-card-description .description p {
        font-size: 16px;
        font-weight: 300;
        line-height: 22px;
        margin: 0;
      }
      .services-card-image {
        position: relative;
        flex: 0 0 auto;
        width: 33.217vw;
      }
      .services-card-image img {
        width: 100%;
        height: auto;
        border-radius: 8px;
      }
      .services-card-button .btn {
        display: flex;
        flex-direction: row;
        gap: 15px;
        width: fit-content;
        align-items: center;
        border-width: 2px;
        padding: 10px 20px;
        border-radius: 8px;
        text-decoration: none;
        transition: all 0.3s ease;
      }
      .services-card-button .btn-branding-secondary {
        background-color: #f7fafc;
        color: #222;
        border: 2px solid #222;
      }
      .services-card-button .btn:hover {
        background-color: #e8a145;
        box-shadow: 4px 4px 0px 0px #222;
        color: #000;
        -webkit-box-shadow: 4px 4px 0px 0px #222;
      }
      .services-card-button .btn svg {
        width: 1em;
        height: 1em;
        fill: currentColor;
      }

      @media (min-width: 768px) and (max-width: 1367px) {
        .services-body {
          margin-bottom: 80px;
        }
      }
      @media (max-width: 750px) {
        .section-services {
          padding: 50px 15px 70px;
        }
        .services-header {
          flex-direction: column;
          align-items: center;
          max-width: none;
          margin-bottom: 30px;
        }
        .services-subtitle .subtitle {
          font-size: 16px;
          text-align: center;
        }
        .services-title {
          margin-bottom: 15px;
        }
        .services-title .title {
          font-size: 24px;
          line-height: 28px;
          text-align: center;
        }
        .services-description .description p {
          font-size: 14px;
          text-align: center;
        }
        .services-body {
          height: auto;
          padding-bottom: 100px;
        }
        .services-card {
          position: relative;
          height: auto;
          margin-bottom: 30px;
          padding: 20px 0;
          opacity: 1;
          transform: translateY(0);
          z-index: auto;
          pointer-events: auto;
        }
        .services-card-inner {
          max-width: none;
          margin: 0;
          flex-direction: column;
          gap: 15px;
          padding: 0 14px;
        }
        .services-card-title {
          margin-bottom: 10px;
        }
        .services-card-title .title {
          font-size: 24px;
          line-height: 28px;
          text-align: center;
        }
        .services-card-description {
          margin-bottom: 30px;
        }
        .services-card-description .description {
          font-size: 14px;
          line-height: normal;
          text-align: center;
        }
        .services-card-button {
          display: flex;
          justify-content: center;
        }
        .services-card-text {
          order: 2;
        }
        .services-card-image {
          order: 1;
          width: 100%;
          margin-bottom: 20px;
        }
        .pin-spacer {
          display: block !important;
          width: auto !important;
          height: auto !important;
          padding: 0 !important;
          position: relative !important;
        }
        .services-list {
          position: relative !important;
          min-height: auto !important;
          display: flex !important;
          flex-direction: column !important;
          width: 100% !important;
          height: auto !important;
          max-height: none !important;
          left: auto !important;
          top: auto !important;
          transform: none !important;
        }
      }`}
      </style>
      <div className="min-h-screen bg-gray-50">
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
                let opacity = 1;
                let zIndex = servicesData.length - index;
                let pointerEvents = "auto";

                if (isFuture) {
                  // Cards that haven't appeared yet - start from front
                  translateY = 100; // Start from below
                  scale = 0.9;
                  opacity = 0;
                  zIndex = index; // Lower z-index for future cards
                  pointerEvents = "none"; // Disable interaction for future cards
                } else if (isCurrent) {
                  // Current card being animated
                  translateY = 0;
                  scale = 1;
                  opacity = 1;
                  zIndex = servicesData.length + 10; // Highest z-index for current card
                  pointerEvents = "auto"; // Enable interaction for current card
                } else if (isPast) {
                  // Cards that have passed - move to back with stacking effect
                  translateY = -cardProgress * 20; // Slight upward movement
                  scale = 1 - cardProgress * 0.05; // Subtle scale down
                  rotateX = cardProgress * -5; // Slight rotation for depth
                  opacity = 1 - cardProgress * 0.3; // Fade slightly
                  zIndex = servicesData.length - index - 1; // Lower z-index for past cards
                  pointerEvents = "none"; // Disable interaction for past cards
                }

                // Special handling for the transition between cards
                if (isCurrent && cardProgress > 0) {
                  const nextIndex = index + 1;
                  if (nextIndex < servicesData.length) {
                    // Current card starts moving back
                    translateY = -cardProgress * 30;
                    scale = 1 - cardProgress * 0.1;
                    rotateX = -cardProgress * 10;
                    opacity = 1 - cardProgress * 0.2;
                    // Keep interaction enabled during transition
                    pointerEvents = cardProgress < 0.8 ? "auto" : "none";
                  }
                }

                return (
                  <div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out"
                    style={{
                      transform: `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`,
                      opacity: opacity,
                      zIndex: zIndex,
                      transformOrigin: "center center",
                      transformStyle: "preserve-3d",
                      pointerEvents: pointerEvents,
                    }}
                  >
                    <div className="w-full max-w-6xl mx-auto px-4">
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
                              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 group relative cursor-pointer"
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
                          <div className="flex justify-center lg:justify-end">
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

                        {/* Progress indicator */}
                        <div className="absolute bottom-6 left-8 flex space-x-2">
                          {servicesData.map((_, i) => (
                            <div
                              key={i}
                              className={`
                              w-2 h-2 rounded-full transition-all duration-300
                              ${
                                i === activeCard
                                  ? "bg-orange-500 w-8"
                                  : "bg-gray-400 opacity-50"
                              }
                              `}
                            />
                          ))}
                        </div>

                        {/* Card number indicator */}
                        <div className="absolute top-8 right-8 text-sm opacity-60">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(servicesData.length).padStart(2, "0")}
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
    </>
  );
}
