import React from "react";

export default function ContentSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header for Featured Categories */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products across various
            categories
          </p>
        </div>

        {/* Categories Grid */}
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

        {/* Popular Products Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Products
            </h2>
            <p className="text-gray-600">
              Best-selling items loved by our customers
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              >
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
