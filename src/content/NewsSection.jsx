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
    image: "./news.jpg",
    category: "Digital Marketing",
    date: "23 May 2025",
    title:
      "Jangan Cuma Kejar Tren! Ini Prioritas Brand yang Harus Diberesin di Awal Q2 2025",
    description:
      "Prioritas brand di kuartal kedua 2025 bukan sekadar ngejar tren, tapi memperkuat fondasi, konsistensi, dan strategi agar siap beradaptasi!",
    link: "#",
  },
  {
    image: "./news.jpg",
    category: "All Article",
    date: "09 May 2025",
    title: "Strategi Brand Naik Level: Integrasi Data CRM dan E-commerce",
    description:
      "Optimalkan penjualan dengan integrasi CRM dan e-commerce. Meningkatkan konversi leads dan strategi pemasaran lebih terarah",
    link: "#",
  },
  {
    image: "./news.jpg",
    category: "Digital Marketing",
    date: "23 Apr 2025",
    title:
      "Gak Harus Bakar Uang! Ini Strategi Marketing 2025 yang Efektif Buat Q2",
    description:
      "Strategi marketing 2025 fokus pada efisiensi tanpa buang anggaran. Optimalkan Q2 dengan taktik low cost, high impact yang hasilnya nyata!",
    link: "#",
  },
  {
    image: "./news.jpg",
    category: "Digital Marketing",
    date: "22 Apr 2025",
    title:
      "Tren Kreatif di Indonesia: dari AI sampai Konten yang Rooted ke Budaya",
    description:
      "Tren kreatif di Indonesia makin bergerak ke arah yang lebih bermakna. Brand wajib beradaptasi, dari AI hingga konten yang berakar ke budaya!",
    link: "#",
  },
];

const NewsCard = ({ post }) => (
  <div className="group relative flex h-full flex-col">
    <div className="mb-2 flex h-full flex-col overflow-hidden rounded-lg border-2 border-zinc-800 bg-white transition-shadow duration-200 ease-in-out group-hover:translate-x-[-3px] group-hover:translate-y-[-3px] group-hover:shadow-[6px_6px_0px_0px_#222]">
      <div className="relative">
        <img
          loading="lazy"
          src={post.image}
          alt={post.title}
          className="aspect-[4/3] h-auto w-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x450/eee/ccc?text=Image+Error";
          }}
        />
        <a
          href={post.link}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc-800 bg-white transition-all duration-200 ease-in-out group-hover:bg-[#FFB14C] md:h-10 md:w-10"
        >
          <ArrowIcon className="h-4 w-4 -rotate-45 text-zinc-800 md:h-5 md:w-5" />
        </a>
      </div>
      <div className="flex flex-grow flex-col p-3">
        <div className="mb-2">
          <p className="m-0 inline-block w-auto rounded-full border-2 border-zinc-800 bg-[#F4F0EA] px-3 py-1 text-xs font-medium">
            {post.category}
          </p>
        </div>
        <p className="mb-2 text-xs font-light uppercase text-zinc-600">
          {post.date}
        </p>
        <div className="mb-2 flex-grow">
          <a href={post.link} className="text-zinc-800">
            <h6 className="line-clamp-3 text-sm font-medium leading-tight text-zinc-800 group-hover:underline">
              {post.title}
            </h6>
          </a>
        </div>
        <div className="mb-3">
          <p className="line-clamp-2 text-xs font-light text-zinc-600">
            {post.description}
          </p>
        </div>
        <div className="mt-auto">
          <a
            href={post.link}
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-800"
          >
            Read More
            <ArrowIcon className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
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
        
        body {
            font-family: 'Inter', sans-serif;
        }

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

      <div className="min-h-screen bg-white font-sans lg:bg-gray-50">
        {/* <main className="pb-16 lg:pb-0"> */}
        <section className="section-blog container mx-auto flex flex-col items-center justify-center gap-12 px-4 py-12 md:gap-24 lg:flex-row lg:justify-end lg:py-24">
          {/* Left Text Content */}
          <div className="flex-shrink-0 text-center lg:w-[400px] lg:text-left">
            <div className="mb-1.5">
              <p className="text-sm font-medium text-[#513B6A]">CASE STUDY</p>
            </div>
            <div className="mb-16 lg:mb-12">
              <h4 className="text-4xl font-normal text-zinc-800 md:text-2xl md:leading-tight">
                Explore more about our partner success stories
              </h4>
            </div>
            <div className="flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-4 rounded-md bg-transparent px-6 py-3 text-lg font-semibold text-zinc-800 ring-2 ring-inset ring-zinc-800 transition-all duration-200 hover:bg-[#E8A145] hover:text-black hover:shadow-[4px_4px_0px_0px_#222]"
              >
                See More Success Stories
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
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              {newsData.slice(0, 4).map((post, index) => (
                <NewsCard key={index} post={post} />
              ))}
            </div>
          </div>
        </section>
        {/* </main> */}
      </div>
    </>
  );
}
