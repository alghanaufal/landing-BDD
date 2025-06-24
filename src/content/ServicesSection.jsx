import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

// GSAP CDN will be loaded dynamically
let gsap, ScrollTrigger;

export default function OurServices() {
  const servicesData = [
    {
      title: "Digital Advertising",
      description:
        "Reach your optimum growth through Digital Advertising with actionable and impactful strategies.",
      link: "https://bolehdicoba.com/services/digital-advertising/",
      image: "./1.png",
      alt: "Digital Advertising",
      bgColor: "#C8D6EE",
      textColor: "#222",
    },
    {
      title: "Creative Content & Live Shopping",
      description:
        "Performance creative brings the data- and tech-driven process that designed to amplify the impact of the creative itself",
      link: "services/performance-creative",
      image: "./2.png",
      alt: "Creative Content & Live Shopping",
      bgColor: "rgb(34, 34, 34)",
      textColor: "rgb(255, 255, 255)",
    },
    {
      title: "Web Development & Maintenance",
      description:
        "We design and develop the most suitable website for your business to help you sell your products and services effectively.",
      link: "https://bolehdicoba.com/services/website-development/",
      image: "./3.png",
      alt: "Web Development & Maintenance",
      bgColor: "rgb(192, 233, 227)",
      textColor: "rgb(34, 34, 34)",
    },
    {
      title: "Search Engine Optimization",
      description:
        "SEO is a long term investment in marketing to drive organic traffic and skyrocket website rank.",
      link: "https://bolehdicoba.com/services/seo/",
      image: "./4.png",
      alt: "Search Engine Optimization",
      bgColor: "rgb(201, 194, 209)",
      textColor: "rgb(34, 34, 34)",
    },
    {
      title: "Professional Services",
      description:
        "Growth Hack is the art of choosing the right audience, offer and strategy. Will you trust us to guide you through it?",
      link: "https://bolehdicoba.com/services/professional-service/",
      image: "./5.png",
      alt: "Professional Services",
      bgColor: "rgb(254, 203, 199)",
      textColor: "rgb(34, 34, 34)",
    },
    {
      title: "Community Program Development",
      description:
        "We help the business to retain customers, and encourages them to explore more of your products and services.",
      link: "https://bolehdicoba.com/services/community-program-development/",
      image: "./6.png",
      alt: "Community Program Development",
      bgColor: "rgb(255, 231, 200)",
      textColor: "rgb(34, 34, 34)",
    },
    {
      title: "Digital Marketing Training by Boleh Belajar",
      description:
        "Tailored training program guided by industry experts and professionals.",
      link: "https://bolehbelajar.com/",
      image: "./7.png",
      alt: "Digital Marketing Training by Boleh Belajar",
      bgColor: "rgb(241, 237, 229)",
      textColor: "rgb(34, 34, 34)",
    },
  ];
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Load GSAP dynamically
    const loadGSAP = async () => {
      if (typeof window !== "undefined" && !window.gsap) {
        // Load GSAP from CDN
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
          script.onload = resolve;
          document.head.appendChild(script);
        });

        // Load ScrollTrigger
        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
          script.onload = resolve;
          document.head.appendChild(script);
        });

        gsap = window.gsap;
        ScrollTrigger = window.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);
      } else if (window.gsap) {
        gsap = window.gsap;
        ScrollTrigger = window.ScrollTrigger;
      }
    };

    loadGSAP();
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !pinWrapperRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();

      const scrollStart = -containerRect.top;
      const scrollEnd = containerRect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentCard = Math.floor(scrollProgress * servicesData.length);
  const activeCard = Math.min(currentCard, servicesData.length - 1);

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-y-6 gap-x-8 max-w-6xl mx-auto mb-12 px-4">
        {/* Kolom Kiri: Subjudul dan Judul Utama */}
        <div className="flex-1 min-w-[300px]">
          <div className="mb-3">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              OUR SERVICES
            </p>
          </div>
          <div>
            <h4 className="text-4xl lg:text-4xl font-semibold text-gray-800 leading-tight">
              We Offer a Wide Services Aimed to Support your Business
            </h4>
          </div>
        </div>

        {/* Kolom Kanan: Deskripsi */}
        <div className="flex-1 min-w-[300px] md:max-w-md">
          <div>
            <p className="text-sm font-normal text-gray-600 leading-relaxed">
              It may surprise you, but digital marketing is not a single
              strategy, it covers a lot of spectrum, but don't worry,we got you!
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen ">
        {/* Pin Spacer Container */}
        <div
          ref={containerRef}
          className="relative"
          style={{
            height: `${100 + (servicesData.length - 1) * 100}vh`,
          }}
        >
          {/* Pin Wrapper */}
          <div
            ref={pinWrapperRef}
            className="sticky top-0 h-screen overflow-hidden"
          >
            {/* Cards Container */}
            <div ref={cardsRef} className="relative w-full h-full">
              {servicesData.map((service, index) => {
                const cardStartProgress = index / servicesData.length;
                const cardEndProgress = (index + 1) / servicesData.length;

                const isCurrent =
                  scrollProgress >= cardStartProgress &&
                  scrollProgress < cardEndProgress;
                const isPast = scrollProgress >= cardEndProgress;
                const isFuture = scrollProgress < cardStartProgress;

                const cardProgress = isCurrent
                  ? (scrollProgress - cardStartProgress) /
                    (cardEndProgress - cardStartProgress)
                  : isPast
                  ? 1
                  : 0;

                let translateY = 0;
                let scale = 1;
                let rotateX = 0;
                let zIndex = servicesData.length - index;
                let pointerEvents = "auto";

                if (isFuture) {
                  scale = 0.95;
                  zIndex = index;
                  pointerEvents = "none";
                } else if (isCurrent) {
                  translateY = 0;
                  scale = 1;
                  zIndex = servicesData.length + 10;
                  pointerEvents = "auto";
                } else if (isPast) {
                  translateY = -cardProgress * 50;
                  scale = 1 - cardProgress * 0.03;
                  rotateX = cardProgress * -3;
                  zIndex = servicesData.length - index - 1;
                  pointerEvents = "none";
                }

                if (isCurrent && cardProgress > 0) {
                  const nextIndex = index + 1;
                  if (nextIndex < servicesData.length) {
                    translateY = -cardProgress * 80;
                    scale = 1 - cardProgress * 0.05;
                    rotateX = -cardProgress * 5;
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
                    <div
                      className="w-full mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl sm:rounded-3xl overflow-hidden relative flex items-center justify-center"
                      style={{
                        backgroundColor: service.bgColor,
                        color: service.textColor,
                        height: isMobile ? "85vh" : "75vh",
                        minHeight: isMobile ? "600px" : "500px",
                        borderWidth: "4px",
                        borderStyle: "solid",
                        borderColor:
                          isCurrent || isFuture
                            ? "rgba(0, 0, 0, 0.25)"
                            : "rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="max-w-6xl w-full">
                        {/* Mobile Layout */}
                        {isMobile ? (
                          <div className="p-6 sm:p-8 h-full flex flex-col">
                            {/* Image Section */}
                            <div className="flex-1 flex items-center justify-center mb-6">
                              <div className="relative w-full max-w-sm">
                                <img
                                  src={service.image}
                                  alt={service.alt}
                                  className="w-full h-auto object-contain rounded-lg"
                                  style={{
                                    filter:
                                      service.bgColor === "rgb(34, 34, 34)"
                                        ? "brightness(1.1)"
                                        : "none",
                                  }}
                                />
                              </div>
                            </div>

                            {/* Content Section */}
                            <div className="space-y-4">
                              <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
                                {service.title}
                              </h2>
                              <p className="text-base opacity-90 leading-relaxed">
                                {service.description}
                              </p>
                              <div className="pt-4">
                                <button
                                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg border border-black bg-[#ffb14c] py-3 px-6 font-semibold text-black transition-all duration-300 ease-in-out hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222]"
                                  onClick={() => {
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
                                  <ArrowRight className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Desktop Layout */
                          <div className="p-8 lg:p-12 h-full">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
                              {/* Left Content */}
                              <div className="space-y-6 lg:space-y-8">
                                <div className="space-y-4">
                                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                                    {service.title}
                                  </h2>
                                  <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
                                <div className="pt-6">
                                  <button
                                    className="inline-flex items-center justify-center gap-3 rounded-lg border border-black bg-[#ffb14c] py-3 px-6 font-semibold text-black transition-all duration-300 ease-in-out hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222]"
                                    onClick={() => {
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
                                    <ArrowRight className="w-5 h-5" />
                                  </button>
                                </div>
                              </div>

                              {/* Right Content - Image */}
                              <div className="flex justify-center lg:justify-end">
                                <div className="relative w-full max-w-md lg:max-w-lg">
                                  <img
                                    src={service.image}
                                    alt={service.alt}
                                    className="w-full h-auto object-contain transition-transform duration-700 ease-out"
                                    style={{
                                      filter:
                                        service.bgColor === "rgb(34, 34, 34)"
                                          ? "brightness(1.1)"
                                          : "none",
                                    }}
                                  />
                                  {/* Decorative elements */}
                                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full opacity-30 animate-pulse"></div>
                                  <div
                                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500 rounded-full opacity-30 animate-pulse"
                                    style={{ animationDelay: "1s" }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
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
