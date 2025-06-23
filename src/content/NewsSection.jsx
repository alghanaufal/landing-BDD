import React from "react";
// Import Swiper React components from a CDN that supports ES Modules
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules from the same CDN
import { Scrollbar, FreeMode } from "swiper/modules";

// --- Helper Components & Data ---

// Icon component for arrows to keep the code clean
const ArrowIcon = ({ className }) => (
  <svg
    className={className}
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="currentColor"
      d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 0 273.7 0 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"
    />
  </svg>
);

// Sample data for the news cards.
const newsData = [
  {
    image: "https://placehold.co/600x450/F4F0EA/333?text=Brand+Priorities",
    category: "Digital Marketing",
    date: "23 May 2025",
    title:
      "Jangan Cuma Kejar Tren! Ini Prioritas Brand yang Harus Diberesin di Awal Q2 2025",
    description:
      "Prioritas brand di kuartal kedua 2025 bukan sekadar ngejar tren, tapi memperkuat fondasi, konsistensi, dan strategi agar siap beradaptasi!",
    link: "#",
  },
  {
    image: "https://placehold.co/600x450/F4F0EA/333?text=Brand+Strategy",
    category: "All Article",
    date: "09 May 2025",
    title: "Strategi Brand Naik Level: Integrasi Data CRM dan E-commerce",
    description:
      "Optimalkan penjualan dengan integrasi CRM dan e-commerce. Meningkatkan konversi leads dan strategi pemasaran lebih terarah",
    link: "#",
  },
  {
    image: "https://placehold.co/600x450/F4F0EA/333?text=Marketing+Strategy",
    category: "Digital Marketing",
    date: "23 Apr 2025",
    title:
      "Gak Harus Bakar Uang! Ini Strategi Marketing 2025 yang Efektif Buat Q2",
    description:
      "Strategi marketing 2025 fokus pada efisiensi tanpa buang anggaran. Optimalkan Q2 dengan taktik low cost, high impact yang hasilnya nyata!",
    link: "#",
  },
  {
    image: "https://placehold.co/600x450/F4F0EA/333?text=Creative+Trends",
    category: "Digital Marketing",
    date: "22 Apr 2025",
    title:
      "Tren Kreatif di Indonesia: dari AI sampai Konten yang Rooted ke Budaya",
    description:
      "Tren kreatif di Indonesia makin bergerak ke arah yang lebih bermakna. Brand wajib beradaptasi, dari AI hingga konten yang berakar ke budaya!",
    link: "#",
  },
];

// --- Main Components ---

// Individual News Card Component, styled with Tailwind CSS
const NewsCard = ({ post }) => (
  <div className="group relative flex h-full flex-col">
    {/* The main card container with border and hover shadow */}
    <div className="mb-2 flex h-full flex-col overflow-hidden rounded-lg border-2 border-zinc-800 bg-[#F4F0EA] transition-shadow duration-200 ease-in-out group-hover:translate-x-[-3px] group-hover:translate-y-[-3px] group-hover:shadow-[6px_6px_0px_0px_#222]">
      <div className="news-card-image">
        <img
          loading="lazy"
          src={post.image}
          alt={post.title}
          className="aspect-[4/3] h-auto w-full rounded-t-lg object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x450/eee/ccc?text=Image+Error";
          }}
        />
      </div>
      <div className="flex flex-grow flex-col rounded-b-lg border-t-2 border-zinc-800 p-5 md:p-4">
        <div className="mb-4">
          <p className="m-0 inline-block w-auto rounded-full border-2 border-zinc-800 bg-white px-3.5 py-1.5 text-sm font-medium">
            {post.category}
          </p>
        </div>
        <p className="mb-2.5 text-base font-light uppercase text-zinc-800">
          {post.date}
        </p>
        <div className="mb-2.5">
          <a href={post.link} className="text-zinc-800">
            <h6 className="line-clamp-3 text-2xl font-medium leading-tight text-zinc-800 group-hover:underline md:text-lg">
              {post.title}
            </h6>
          </a>
        </div>
        <div className="mb-5">
          <p className="line-clamp-3 text-base font-light text-zinc-800 md:text-sm">
            {post.description}
          </p>
        </div>
        <div className="mt-auto">
          <a
            href={post.link}
            className="flex items-center gap-2.5 text-lg font-medium text-zinc-800"
          >
            Read More
            <ArrowIcon className="h-4 w-4 -rotate-45" />
          </a>
        </div>
      </div>
    </div>
    {/* The circular link icon that appears on hover */}
    <a
      href={post.link}
      className="absolute right-5 top-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-zinc-800 bg-white transition-all duration-200 ease-in-out group-hover:bg-[#FFB14C] group-hover:shadow-[4px_4px_0px_0px_#222] md:right-4 md:top-4 md:h-12 md:w-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-zinc-800"
        style={{ transform: "rotate(-45deg)" }}
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </a>
  </div>
);

// Main App Component
export default function App() {
  return (
    <>
      {/* Custom styles for Swiper scrollbar and importing Swiper's CSS from CDN. */}
      <style>{`
        @import url('https://unpkg.com/swiper@11/swiper.min.css');
        @import url('https://unpkg.com/swiper@11/modules/scrollbar.min.css');
        
        .section-news .swiper-scrollbar {
          height: 2px !important;
          background-color: #A9A59E;
          margin-top: 30px;
          margin-bottom: 55px;
          bottom: 35px !important;
          left: 0;
          width: 48vw; /* Corresponds to original 47.917vw */
        }
        .section-news .swiper-scrollbar-drag {
          background-color: transparent;
          background-image: url('https://bolehdicoba.com/wp-content/uploads/2025/02/slide-indicator.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center bottom;
          height: 135px !important;
          border-radius: 0;
          top: -60px; /* Adjust vertical position */
          cursor: grab;
          margin-top: 10px;
        }
        @media (max-width: 1023px) { /* lg breakpoint */
            .section-news .swiper-scrollbar {
              display: none;
            }
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 font-sans">
        <section className="section-news container mx-auto flex flex-col items-center justify-center gap-12 px-4 py-12 lg:flex-row lg:items-start lg:justify-end lg:gap-12 lg:py-24">
          {/* Left Text Content */}
          <div className="flex-shrink-0 text-center lg:w-[400px] lg:text-left">
            <div className="mb-1.5">
              <p className="text-sm font-medium text-[#513B6A]">NEWS & BLOG</p>
            </div>
            <div className="mb-8 lg:mb-12">
              <h4 className="text-4xl font-normal text-zinc-800 md:text-2xl md:leading-tight">
                Your time is valuable.
                <br />
                Read our insightful article within 5 minutes.
              </h4>
            </div>
            <div className="flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-4 rounded-lg border-2 border-zinc-800 bg-[#F4F0EA] px-6 py-3 text-lg font-medium text-zinc-800 shadow-[4px_4px_0px_0px_#222] transition-all duration-200 hover:bg-[#E8A145]"
              >
                Explore More Article
                <ArrowIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content Area (Swiper for Desktop, Grid for Mobile) */}
          <div className="w-full lg:w-3/5">
            {/* Desktop Swiper View */}
            <div className="hidden lg:block">
              <Swiper
                modules={[Scrollbar, FreeMode]}
                freeMode={true}
                grabCursor={true}
                slidesPerView={"auto"}
                spaceBetween={30}
                scrollbar={{
                  draggable: true,
                  hide: false,
                }}
                className="!pb-32" // Padding bottom to make space for the scrollbar
              >
                {newsData.map((post, index) => (
                  <SwiperSlide
                    key={index}
                    style={{ width: "360px", height: "auto" }}
                  >
                    <NewsCard post={post} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Mobile Grid View */}
            <div className="flex flex-wrap justify-center gap-4 lg:hidden">
              {newsData.slice(0, 4).map((post, index) => (
                <div key={index} className="w-full max-w-md sm:w-[48%]">
                  <NewsCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
