import React, { useEffect, useRef } from "react";

export default function SpaceSection({ data }) {
  const swiperRef = useRef(null);

  // Hook ini bertanggung jawab untuk menyuntikkan library Swiper.js.
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

    // Fungsi cleanup saat komponen di-unmount.
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  // Hook ini mengatur parameter Swiper setelah komponen di-mount.
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    if (!swiperContainer) {
      return;
    }

    const params = {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2.5 },
        1024: { slidesPerView: 3 },
      },
      injectStyles: [
        `
        .swiper-pagination {
            position: relative;
            margin-top: 2.5rem;
            bottom: auto;
        }
        
        .swiper-pagination-bullet {
            background-color: #a0aec0;
            width: 5px;
            height: 5px;
            opacity: 0.75;
            transition: background-color 0.3s, opacity 0.3s;
        }

        .swiper-pagination-bullet-active {
            background-color: #1a202c;
            opacity: 1;
        }
        `,
      ],
    };

    customElements.whenDefined("swiper-container").then(() => {
      if (swiperRef.current) {
        Object.assign(swiperRef.current, params);
        swiperRef.current.initialize();
      }
    });
  }, []); // Dependensi kosong agar hanya berjalan sekali.

  return (
    <>
      <div className="border-2 border-gray-900"></div>
      <div className="section-space my-20 py-16 px-4 sm:px-6 lg:px-8 font-sans max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Judul dan deskripsi sekarang dinamis dari prop 'data' */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
            {data.description}
          </p>
        </div>

        <swiper-container ref={swiperRef} init="false" class="select-none">
          {/* Memetakan dari array 'images' di dalam prop 'data' */}
          {data.images.map((item) => (
            <swiper-slide key={item.id}>
              <div className="flex-shrink-0 px-2 h-full">
                <img
                  src={item.src}
                  alt={`Our Space - Image ${item.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
      <div className="border-2 border-gray-900"></div>
    </>
  );
}
