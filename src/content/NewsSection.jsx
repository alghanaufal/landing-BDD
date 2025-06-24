import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Scrollbar, FreeMode } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

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
        />
        <a
          href={post.link}
          className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc-800 bg-white transition-all duration-200 ease-in-out group-hover:bg-[#FFB14C] md:h-10 md:w-10"
        >
          <FaArrowRight className="h-4 w-4 -rotate-45 text-zinc-800 md:h-5 md:w-5" />
        </a>
      </div>
      <div className="flex flex-grow flex-col p-4">
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
            <h6 className="line-clamp-3 text-base font-medium leading-tight text-zinc-800 group-hover:underline">
              {post.title}
            </h6>
          </a>
        </div>
        <div className="mb-3">
          <p className="line-clamp-2 text-sm font-light text-zinc-600">
            {post.description}
          </p>
        </div>
        <div className="mt-auto">
          <a
            href={post.link}
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-800"
          >
            Read More
            <FaArrowRight className="h-3 w-3 -rotate-45" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Main App Component
export default function NewsSection() {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="min-h-screen font-sans">
        <section className="section-blog container mx-auto flex flex-col items-center justify-center px-4 py-12 md:py-24">
          {/* Top Header Section */}
          <div className="mb-12 flex w-full flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div className="flex-shrink-0">
              <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#513B6A]">
                NEWS & BLOG
              </p>
              <h2 className="text-3xl font-medium text-zinc-800 md:text-4xl">
                Your time is valuable.
              </h2>
              <p className="text-lg text-zinc-600">
                Read our insightful articles within 5 minutes.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 w-fit rounded-lg border border-black bg-[#ffb14c] py-[9px] pl-6 pr-4 font-semibold text-black transition-all duration-300 ease-in-out hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222]"
              >
                Explore More Articles
                <FaArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-full">
            {/* Desktop Swiper View */}
            <div className="hidden lg:block">
              <Swiper
                ref={swiperRef}
                modules={[Scrollbar, FreeMode]}
                freeMode={true}
                grabCursor={true}
                slidesPerView={"auto"}
                spaceBetween={30}
                scrollbar={{
                  draggable: true,
                  hide: false,
                }}
                className="!pb-32"
              >
                {newsData.map((post, index) => (
                  <SwiperSlide
                    key={index}
                    style={{ width: "460px", height: "auto" }}
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
      </div>
    </>
  );
}
