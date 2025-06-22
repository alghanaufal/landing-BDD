import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react"; // Menggunakan Lucide React untuk ikon

// Komponen BlogCard untuk setiap entri blog
const BlogCard = ({
  imageUrl,
  imageAlt,
  category,
  logoUrl,
  logoAlt,
  title,
  description,
  link,
}) => {
  return (
    // Blog card container with responsive width and hover effects
    <div
      className="blog-card relative flex flex-col h-auto transition-all duration-200 ease-in-out
                    max-sm:w-[calc(50%-10px)]"
    >
      {" "}
      {/* Adjusted for small screen gap */}
      <div
        className="blog-card-inner mb-2 border-2 border-[#222] rounded-lg transition-all duration-200 ease-in-out flex flex-col h-full
                      hover:shadow-[6px_6px_0px_0px_#222]"
      >
        {/* Blog card image */}
        <div className="blog-card-image">
          <img
            loading="lazy"
            decoding="async"
            width="100%"
            src={imageUrl}
            className="w-full rounded-t-[6px]"
            alt={imageAlt}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/780x458/cccccc/333333?text=Blog+Image";
            }}
          />
        </div>
        {/* Blog card category */}
        <div
          className="blog-card-category py-3.5 bg-[#F4F0EA] text-center border-y-2 border-[#222]
                        max-sm:px-5 max-sm:py-1.5"
        >
          <p
            className="category text-base font-medium leading-normal m-0 text-black
                        max-sm:text-xs max-sm:whitespace-nowrap"
          >
            {category}
          </p>
        </div>
        {/* Blog card body */}
        <div
          className="blog-card-body p-5 flex flex-col flex-grow
                        max-sm:p-2.5"
        >
          {/* Blog card logo */}
          <div className="blog-card-logo mb-1.5 max-sm:mb-2.5">
            <img
              decoding="async"
              src={logoUrl}
              alt={logoAlt}
              className="max-h-[30px] w-auto" // Adjusted for better responsiveness for logo size
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/40x40/cccccc/333333?text=Logo";
              }}
            />
          </div>
          {/* Blog card title */}
          <div className="blog-card-title mb-2.5 max-sm:mb-1">
            <a href={link} className="block hover:underline">
              <h6
                className="title text-[#222] text-2xl font-medium leading-normal m-0
                             overflow-hidden text-ellipsis line-clamp-5
                             max-sm:text-sm max-sm:leading-5 max-sm:line-clamp-4"
              >
                {title}
              </h6>
            </a>
          </div>
          {/* Blog card description */}
          <div className="blog-card-description mb-5 max-sm:mb-2.5">
            <p
              className="description text-[#222] text-base font-light leading-normal m-0
                          overflow-hidden text-ellipsis line-clamp-3
                          max-sm:text-xs max-sm:line-clamp-3"
            >
              {description}
            </p>
          </div>
          {/* Blog card link */}
          <div className="blog-card-link mt-auto pt-2">
            {" "}
            {/* Added pt-2 to give space between description and link */}
            <a
              href={link}
              className="text-[#222] text-lg font-medium leading-normal m-0 flex items-center gap-2.5
                                    max-sm:text-sm max-sm:gap-1.5"
            >
              Read The Story
              <ArrowRight size={20} className="rotate-[-45deg] mb-[-3px]" />
            </a>
          </div>
        </div>
      </div>
      {/* Absolute positioned link with icon */}
      <div
        className="blog-link absolute top-5 right-5 flex transition-all duration-200 ease-in-out
                      max-sm:top-[9px] max-sm:right-3"
      >
        <a
          href={link}
          className="block text-[#222] border-2 border-[#222] rounded-full bg-white text-3xl p-[11px] px-4 w-16 h-16 transition-all duration-200 ease-in-out flex items-center justify-center
                                max-sm:text-xs max-sm:p-[3px] max-sm:px-1.5 max-sm:w-6 max-sm:h-6
                                hover:bg-[#FFB14C] hover:shadow-[6px_6px_0px_0px_#222]"
        >
          <ArrowRight
            size={28}
            className="rotate-[-45deg] max-sm:text-sm max-sm:w-3 max-sm:h-3"
          />
        </a>
      </div>
    </div>
  );
};

const BlogSection = () => {
  // Data dummy untuk kartu blog
  const blogPosts = [
    {
      id: 1,
      imageUrl:
        "https://bolehdicoba.com/wp-content/uploads/2025/04/Colorbox-Post-Featured.webp",
      imageAlt: "Colorbox",
      category: "Digital Advertising",
      logoUrl:
        "https://bolehdicoba.com/wp-content/uploads/2025/04/colorbox-logo.png",
      logoAlt: "logo-card-blog",
      title:
        "Offline-Focused, Digitally-Activated: How Click & Collect Delivered 30% of Monthly Web Revenue",
      description:
        "Unlock growth by activating untapped eCommerce features like Click & Collect, boosting sales, ROAS, and cross-team alignment for sustainable fashion retail success",
      link: "https://bolehdicoba.com/news-blog/case-study/offline-focused-digitally-activated-how-click-collect-delivered-30-of-monthly-web-revenue/",
    },
    {
      id: 2,
      imageUrl:
        "https://bolehdicoba.com/wp-content/uploads/2024/04/Rectangle-9899-3.png",
      imageAlt: "Logitech",
      category: "Digital Advertising",
      logoUrl:
        "https://bolehdicoba.com/wp-content/uploads/2024/04/Group-40398-1.png",
      logoAlt: "logo-card-blog",
      title:
        "Consistently crushed expectations with an average ROAS of 10x per month, soaring past our 8x target.",
      description:
        "Discover how our actionable strategies works brilliantly, delivering impressive average ROAS for Logitech.",
      link: "https://bolehdicoba.com/news-blog/case-study/consistently-crushed-expectations-with-an-average-roas-of-10x-per-month-soaring-past-our-8x-target/",
    },
    {
      id: 3,
      imageUrl:
        "https://bolehdicoba.com/wp-content/uploads/2024/04/Rectangle-9899.png",
      imageAlt: "AXA Insurance",
      category: "Digital Advertising",
      logoUrl:
        "https://bolehdicoba.com/wp-content/uploads/2024/04/image-301-1.png",
      logoAlt: "logo-card-blog",
      title:
        "Generated a monthly three-fold increase in the quantity and quality of leads.",
      description:
        "Axa Insurance Indonesia achieved a remarkable threefold increase in both the quality and quantity of leads by leveraging the BDD digital advertising strategy.",
      link: "https://bolehdicoba.com/news-blog/case-study/generated-a-monthly-three-fold-increase-in-the-quantity-and-quality-of-leads/",
    },
    {
      id: 4,
      imageUrl:
        "https://bolehdicoba.com/wp-content/uploads/2024/04/Rectangle-9899-1.png",
      imageAlt: "Yamaha Jabar",
      category: "Digital Advertising",
      logoUrl:
        "https://bolehdicoba.com/wp-content/uploads/2024/04/Frame-2200447.png",
      logoAlt: "logo-card-blog",
      title:
        "Yamaha Jabar connected with an audience of 1 million people each month.",
      description:
        "Yamaha's ambition to boost its brand awareness aligns seamlessly with the BDD strategy. Check out how it all comes together here!",
      link: "https://bolehdicoba.com/news-blog/case-study/yamaha-jabar-connected-with-an-audience-of-1-million-people-each-month/",
    },
  ];
  return (
    <>
      {/* Custom styles for the horizontal scrollbar */}
      {/* These styles are applied to the native scrollbar for consistency. */}
      <style>
        {`
        /* Webkit (Chrome, Safari, Edge, Opera) scrollbar styles */
        .blog-list::-webkit-scrollbar {
          height: 100px; /* Lebar total area scrollbar */
        }

        .blog-list::-webkit-scrollbar-track {
          background-color: #A9A59E; /* Warna track scrollbar */
        }

        .blog-list::-webkit-scrollbar-thumb {
          background-color: #00BFB3; /* Warna teal untuk thumb */
          border: 2px solid #222; /* Border hitam */
          border-radius: 50px; /* Bentuk pill/kapsul */
          background-image: none; /* Menghapus gambar latar belakang */
          background-size: auto;
          background-repeat: no-repeat;
          background-position: center;
          height: 64px; /* Tinggi thumb, mungkin tidak akurat di semua browser */
        }

        /* Firefox scrollbar styles */
        .blog-list {
          scrollbar-width: thin; /* "auto" or "thin" */
          scrollbar-color: #00BFB3 #A9A59E; /* thumb color dan track color */
          /* Menghapus border-image karena tidak relevan tanpa gambar latar belakang */
          border-image: none;
        }

        /* Responsive overrides for scrollbar height/position if needed for specific desktop viewports */
        @media (min-width: 768px) {
          .blog-list.desktop-scrollbar {
            padding-bottom: 135px; /* Adjust padding for scrollbar visibility */
            margin-bottom: 55px; /* Mimic original margin for scrollbar positioning */
          }
          .blog-list.desktop-scrollbar::-webkit-scrollbar-thumb {
            height: 135px; /* Visual target, might not be exact */
            border-radius: 67.5px; /* Menyesuaikan radius untuk tinggi baru */
          }
        }
        `}
      </style>

      <div
        className="section-blog mx-auto my-24 flex flex-row justify-end items-center gap-8
                      max-sm:my-12 max-sm:mb-[70px] max-sm:px-4 max-sm:flex-col max-sm:justify-center"
      >
        {/* Blog Text Section */}
        <div
          className="blog-text flex-none w-[22.917vw]
                        max-sm:w-full"
        >
          <div className="blog-subtitle mb-1.5">
            <p
              className="subtitle text-[#513B6A] text-sm font-medium leading-normal m-0
                          max-sm:text-base max-sm:text-center"
            >
              CASE STUDY
            </p>
          </div>
          <div className="blog-title mb-[70px] max-sm:mb-4">
            <h4
              className="title text-[#222] text-4xl font-normal leading-normal m-0
                          max-sm:text-2xl max-sm:leading-7 max-sm:text-center"
            >
              Explore more about our partner success stories
            </h4>
          </div>
          <div className="blog-button max-sm:flex max-sm:justify-center">
            <a
              href="https://bolehdicoba.com/case-study/"
              className="btn btn-branding-secondary text-lg font-semibold leading-normal m-0 flex gap-4 w-fit items-center px-6 py-2.5 border border-black rounded-md transition-all duration-300 ease-in-out bg-white text-black
                        max-sm:shadow-[4px_4px_0px_0px_#222] max-sm:px-5 max-sm:py-2 max-sm:text-base
                        hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222] hover:text-black"
            >
              See More Success Stories
              <ArrowRight size={24} />
            </a>
          </div>
        </div>

        {/* Blog Content Section (Desktop View - Horizontal Scroll) */}
        <div
          className="blog-content flex-none w-[calc(100%-576px)] hidden md:block
                        md:w-[calc(100%-455px)]"
        >
          <div className="blog-list desktop-scrollbar flex flex-row items-center w-full pb-[135px] pr-8 overflow-x-auto whitespace-nowrap md:min-h-[850px]">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="blog-card flex-shrink-0 inline-block mr-8 last:mr-0"
                style={{ width: "170.8px" }}
              >
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>

        {/* Blog Content Section (Mobile View - Grid Layout) */}
        <div className="blog-content hidden max-sm:block w-full">
          <div className="blog-list flex flex-row flex-wrap justify-center gap-x-[13px] gap-y-2.5 pb-0 pr-0">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
