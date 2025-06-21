import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // If using autoplay module

export default function ContentSection() {
  // Data for popular products, including name, price, image URL, and rating
  const popularProducts = [
    {
      name: "Wireless Headphones",
      price: "$99.99",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=250&h=250&fit=crop",
      rating: "4.8",
    },
    {
      name: "Smart Watch",
      price: "$199.99",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=250&h=250&fit=crop",
      rating: "4.9",
    },
    {
      name: "Laptop Bag",
      price: "$49.99",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=250&h=250&fit=crop",
      rating: "4.7",
    },
    {
      name: "Coffee Maker",
      price: "$129.99",
      image:
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=250&h=250&fit=crop",
      rating: "4.6",
    },
    {
      name: "Gaming Mouse",
      price: "$59.99",
      image:
        "https://images.unsplash.com/photo-1592813589917-8e6530a6c0c2?w=250&h=250&fit=crop",
      rating: "4.7",
    },
    {
      name: "Digital Camera",
      price: "$499.99",
      image:
        "https://images.unsplash.com/photo-1502920514313-52581002a659?w=250&h=250&fit=crop",
      rating: "4.9",
    },
    {
      name: "Bluetooth Speaker",
      price: "$79.99",
      image:
        "https://images.unsplash.com/photo-1620000000000-000000000000?w=250&h=250&fit=crop", // Placeholder
      rating: "4.5",
    },
    {
      name: "Fitness Tracker",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1549060279-7e163ab0377a?w=250&h=250&fit=crop",
      rating: "4.8",
    },
    {
      name: "Portable Charger",
      price: "$29.99",
      image:
        "https://images.unsplash.com/photo-1588870104194-d2e8b0b1a0e0?w=250&h=250&fit=crop",
      rating: "4.6",
    },
  ];

  // Data for popular brands, including name and logo URL
  const popularBrands = [
    {
      name: "TechNova",
      logo: "https://via.placeholder.com/150/FF5733/FFFFFF?text=TechNova",
    },
    {
      name: "FashionFlow",
      logo: "https://via.placeholder.com/150/33FF57/FFFFFF?text=FashionFlow",
    },
    {
      name: "HomeLux",
      logo: "https://via.placeholder.com/150/5733FF/FFFFFF?text=HomeLux",
    },
    {
      name: "GameOn",
      logo: "https://via.placeholder.com/150/FF33DA/FFFFFF?text=GameOn",
    },
    {
      name: "AudioWave",
      logo: "https://via.placeholder.com/150/33DAFF/FFFFFF?text=AudioWave",
    },
    {
      name: "FitLife",
      logo: "https://via.placeholder.com/150/DAFF33/FFFFFF?text=FitLife",
    },
    {
      name: "ElectroHub",
      logo: "https://via.placeholder.com/150/FF8C33/FFFFFF?text=ElectroHub",
    },
    {
      name: "StyleSphere",
      logo: "https://via.placeholder.com/150/33A0FF/FFFFFF?text=StyleSphere",
    },
    {
      name: "UrbanGear",
      logo: "https://via.placeholder.com/150/A033FF/FFFFFF?text=UrbanGear",
    },
  ];

  // Utility function to determine the number of slides to show per view based on screen width
  const getBrandsSlidesPerView = () => {
    if (window.innerWidth < 640) return 2; // 2 slides on small screens (e.g., mobile)
    if (window.innerWidth < 768) return 3; // 3 slides on medium screens (e.g., tablets)
    if (window.innerWidth < 1024) return 4; // 4 slides on large screens
    if (window.innerWidth < 1280) return 5; // 5 slides on extra-large screens
    return 6; // 6 slides on larger desktops
  };

  // State to force re-rendering of the brand Swiper when the window is resized
  const [swiperBrandKey, setSwiperBrandKey] = useState(0);

  // Effect hook to handle window resize events
  useEffect(() => {
    const handleResize = () => {
      // Increment the key to force Swiper to re-render and re-calculate slidesPerView
      setSwiperBrandKey((prevKey) => prevKey + 1);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up: remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once on mount and cleans up on unmount

  return (
    <section className="py-16 lg:py-24 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Popular Brands Section with Swiper Slider (Horizontal) */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Trusted Brands
            </h2>
            <p className="text-gray-600">
              Explore products from the best brands in the industry
            </p>
          </div>
          {/* Swiper implementation for Brands */}
          <Swiper
            key={swiperBrandKey} // Key for responsive re-rendering
            modules={[Autoplay, Pagination]} // Modules used: Autoplay for continuous movement, Pagination for dots
            spaceBetween={20} // Space between each slide
            slidesPerView={getBrandsSlidesPerView()} // Number of slides visible at once, based on screen size
            loop={true} // Enables infinite loop for continuous scrolling
            autoplay={{
              delay: 0, // No delay between slides, ensuring continuous movement
              disableOnInteraction: false, // Autoplay continues even if user interacts
              reverseDirection: true, // Scrolls from right to left
            }}
            speed={3000} // Speed of the autoplay transition in milliseconds (lower = faster)
            pagination={{ clickable: true }} // Enables clickable pagination dots
            className="mySwiper brand-swiper" // Custom class for styling
          >
            {popularBrands.map((brand, index) => (
              <SwiperSlide key={index} className="brand-swiper-slide">
                <div className="flex flex-col items-center justify-center p-4">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-24 h-24 object-contain mb-2 rounded-full border border-gray-200 p-2 transform transition-transform duration-300 hover:scale-105"
                  />
                  <p className="text-md font-medium text-gray-800">
                    {brand.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Categories Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Electronics",
              description: "Latest gadgets and tech essentials",
              image:
                "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop",
              items: "2,500+ Items",
            },
            {
              title: "Fashion",
              description: "Trendy clothing and accessories",
              image:
                "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
              items: "1,800+ Items",
            },
            {
              title: "Home & Living",
              description: "Beautiful decor and furniture",
              image:
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
              items: "1,200+ Items",
            },
          ].map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-200 mb-2">{category.description}</p>
                  <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {category.items}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: "🚚",
              title: "Free Shipping",
              description: "Free delivery on orders over $50",
            },
            {
              icon: "🔒",
              title: "Secure Payment",
              description: "100% secure payment processing",
            },
            {
              icon: "↩️",
              title: "Easy Returns",
              description: "30-day hassle-free returns",
            },
            {
              icon: "🎧",
              title: "24/7 Support",
              description: "Round-the-clock customer service",
            },
          ].map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-2xl group-hover:bg-blue-200 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Popular Products Section with Swiper Slider (Vertical) */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Products
            </h2>
            <p className="text-gray-600">
              Best-selling items loved by our customers
            </p>
          </div>
          {/* Swiper implementation for Products */}
          <Swiper
            modules={[Pagination, Mousewheel]} // Modules used: Pagination for dots, Mousewheel for mouse scrolling
            direction={"vertical"} // Sets the slider direction to vertical
            slidesPerView={1} // Shows one slide at a time
            spaceBetween={0} // No space between slides for a clean vertical stack
            mousewheel={true} // Enables mousewheel control for navigation
            pagination={{
              clickable: true, // Pagination dots are clickable
              el: ".product-pagination", // Specifies the custom container for pagination dots
              bulletClass: "product-pagination-bullet", // Custom class for individual bullets
              bulletActiveClass: "product-pagination-bullet-active", // Custom class for the active bullet
            }}
            loop={true} // Enables infinite loop
            // Custom class and Tailwind for height and width for the Swiper container
            className="mySwiper product-swiper h-[500px] w-full rounded-3xl"
          >
            {popularProducts.map((product, index) => (
              <SwiperSlide key={index}>
                {/* Product card content within each slide */}
                <div className="flex justify-center items-center h-full w-full">
                  <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer w-full max-w-sm mx-auto">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">
                        {product.price}
                      </span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm text-gray-600">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Custom pagination container for product slider */}
            <div className="product-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
