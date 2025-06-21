import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper modules
import { Pagination, Mousewheel } from "swiper/modules";

// Import Swiper styles (ensure these are accessible, e.g., via App.css or global import)
import "swiper/css";
import "swiper/css/pagination";

export default function PopularProductsSection() {
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

  return (
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
  );
}
