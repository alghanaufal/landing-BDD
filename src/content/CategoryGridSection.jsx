import React from "react";

export default function CategoryGridSection() {
  // Data for category items
  const categories = [
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
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit-crop",
      items: "1,800+ Items",
    },
    {
      title: "Home & Living",
      description: "Beautiful decor and furniture",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit-crop",
      items: "1,200+ Items",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
      {categories.map((category, index) => (
        <div key={index} className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-200 mb-2">{category.description}</p>
              <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {category.items}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
