import React from "react";
// Import Swiper React components from a CDN that supports ES Modules
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules from the same CDN
import { Scrollbar, FreeMode } from "swiper/modules";

import { FaArrowRight } from "react-icons/fa";

// Sample data for the blog cards. In a real app, this would come from an API.
const blogPosts = [
  {
    image: "./partner.png",
    category: "Digital Advertising",
    logo: "./partner-logo.png",
    title:
      "Offline-Focused, Digitally-Activated: How Click & Collect Delivered 30% of Monthly Web Revenue",
    description:
      "Unlock growth by activating untapped eCommerce features like Click & Collect, boosting sales, ROAS, and cross-team alignment for sustainable fashion retail success.",
    link: "#",
  },
  {
    image: "./partner.png",
    category: "Digital Advertising",
    logo: "./partner-logo.png",
    title:
      "Consistently crushed expectations with an average ROAS of 10x per month, soaring past our 8x target.",
    description:
      "Discover how our actionable strategies works brilliantly, delivering impressive average ROAS for Logitech.",
    link: "#",
  },
  {
    image: "./partner.png",
    category: "Digital Advertising",
    logo: "./partner-logo.png",
    title:
      "Generated a monthly three-fold increase in the quantity and quality of leads.",
    description:
      "Axa Insurance Indonesia achieved a remarkable threefold increase in both the quality and quantity of leads by leveraging the BDD digital advertising strategy.",
    link: "#",
  },
  {
    image: "./partner.png",
    category: "Digital Advertising",
    logo: "./partner-logo.png",
    title:
      "Yamaha Jabar connected with an audience of 1 million people each month.",
    description:
      "Yamaha's ambition to boost its brand awareness aligns seamlessly with the BDD strategy. Check out how it all comes together here!",
    link: "#",
  },
];

// --- Main Components ---

// Individual Blog Card Component
const BlogCard = ({ post }) => (
  <div className="group relative flex h-full flex-col">
    {/* The main card container with border and hover shadow */}
    <div className="mb-2 flex h-full flex-col overflow-hidden rounded-lg border-2 border-zinc-800 bg-white transition-shadow duration-200 ease-in-out group-hover:translate-x-[-3px] group-hover:translate-y-[-3px] group-hover:shadow-[6px_6px_0px_0px_#222]">
      <div className="relative">
        <img
          loading="lazy"
          src={post.image}
          alt={post.title}
          className="h-auto w-full"
        />
      </div>
      <div className="border-y-2 border-zinc-800 bg-[#F4F0EA] py-3.5 text-center md:py-2">
        <p className="text-sm font-medium md:text-xs">{post.category}</p>
      </div>
      <div className="flex flex-grow flex-col p-5 md:p-2.5">
        <div className="mb-2.5 h-10 md:mb-2.5">
          <img
            src={post.logo}
            alt="Client Logo"
            className="max-h-10 md:max-h-8"
          />
          <a
            href={post.link}
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc-800 bg-white transition-all duration-200 ease-in-out group-hover:bg-[#FFB14C] md:h-10 md:w-10"
          >
            <FaArrowRight className="h-4 w-4 -rotate-45 text-zinc-800 md:h-5 md:w-5" />
          </a>
        </div>
        <div className="mb-2.5 h-32 md:h-28">
          <a href={post.link} className="text-zinc-800">
            <h6 className="text-xl font-medium leading-tight text-zinc-800 group-hover:underline md:text-sm md:leading-tight">
              {post.title}
            </h6>
          </a>
        </div>
        <div className="mb-5 h-24 md:mb-2.5 md:h-20">
          <p className="text-base font-light text-zinc-800 md:text-xs">
            {post.description}
          </p>
        </div>
        <div className="mt-auto">
          <a
            href={post.link}
            className="flex items-center gap-2.5 text-lg font-medium text-zinc-800 md:text-sm"
          >
            Read The Story
            <FaArrowRight className="h-4 w-4 -rotate-45" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Main App Component
export default function BlogSection() {
  return (
    <>
      <div className="min-h-screen font-sans">
        <section className="section-blog container mx-auto flex flex-col items-center justify-center gap-12 px-4 py-12 md:gap-24 lg:flex-row lg:justify-end lg:py-24">
          {/* Left Text Content */}
          <div className="flex-shrink-0 text-center lg:w-[400px] lg:text-left">
            <div className="mb-1.5">
              <p className="text-sm font-medium text-[#513B6A]">CASE STUDY</p>
            </div>
            <div className="mb-16 lg:mb-12">
              <h4 className="text-4xl font-normal text-zinc-800 md:leading-tight">
                Explore more about our partner success stories
              </h4>
            </div>
            <div className="flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-3 w-fit rounded-lg border border-black bg-[#ffb14c] py-[9px] pl-6 pr-4 font-semibold text-black transition-all duration-300 ease-in-out hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222]"
              >
                See More Success Stories
                <FaArrowRight className="h-5 w-5" />
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
                {blogPosts.map((post, index) => (
                  <SwiperSlide
                    key={index}
                    style={{ width: "420px", height: "auto" }}
                  >
                    <BlogCard post={post} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Mobile Grid View */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              {blogPosts.slice(0, 4).map((post, index) => (
                <BlogCard post={post} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
