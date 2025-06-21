import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, User, ShoppingCart, Search } from "lucide-react";

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    checkMobile();
    handleScroll();

    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (menu) => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setActiveMenu(menu);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setActiveMenu(null);
      }, 150);
    }
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setActiveMenu(null);
    setIsSearchOpen(false);
  };

  const toggleSubMenu = (menu) => {
    if (isMobile) {
      setActiveMenu(activeMenu === menu ? null : menu);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const menuItems = [
    {
      id: "products",
      title: "Products",
      hasSubmenu: true,
      content: {
        categories: [
          {
            title: "Electronics",
            items: [
              "Smartphones",
              "Laptops",
              "Tablets",
              "Headphones",
              "Cameras",
            ],
          },
          {
            title: "Fashion",
            items: [
              "Men's Clothing",
              "Women's Clothing",
              "Shoes",
              "Accessories",
              "Bags",
            ],
          },
          {
            title: "Home & Garden",
            items: [
              "Furniture",
              "Kitchen",
              "Decor",
              "Garden Tools",
              "Lighting",
            ],
          },
          {
            title: "Sports",
            items: [
              "Fitness Equipment",
              "Outdoor Gear",
              "Team Sports",
              "Water Sports",
              "Winter Sports",
            ],
          },
        ],
        featured: {
          title: "Featured Products",
          image:
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
          description: "Check out our latest collection of premium products",
        },
      },
    },
    {
      id: "services",
      title: "Services",
      hasSubmenu: true,
      content: {
        categories: [
          {
            title: "Support",
            items: [
              "Customer Service",
              "Technical Support",
              "Installation",
              "Warranty",
              "Returns",
            ],
          },
          {
            title: "Business",
            items: [
              "Consulting",
              "Enterprise Solutions",
              "Bulk Orders",
              "Custom Solutions",
              "Training",
            ],
          },
        ],
        featured: {
          title: "24/7 Support",
          image:
            "https://images.unsplash.com/photo-1553484771-371a605b060b?w=300&h=200&fit=crop",
          description:
            "Get help whenever you need it with our round-the-clock support",
        },
      },
    },
    {
      id: "about",
      title: "About",
      hasSubmenu: false,
    },
    {
      id: "contact",
      title: "Contact",
      hasSubmenu: false,
    },
  ];

  const activeMenuContent = menuItems.find(
    (item) => item.id === activeMenu
  )?.content;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Bagian Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* Menggunakan isMobile untuk memilih sumber gambar logo */}
            <img src={isMobile ? "/Logo-S.png" : "/Logo.png"} alt="Logo" />
          </div>

          {/* Grup Menu Desktop dan Ikon Sisi Kanan */}
          <div className="flex items-center space-x-4 lg:space-x-8">
            {" "}
            {/* Adjusted spacing for lg screens */}
            {/* Tautan Navigasi Menu Desktop */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)} // Atur menu aktif saat hover
                >
                  <button
                    className={`flex items-center px-3 py-2 transition-colors duration-200 font-medium text-gray-700 hover:text-blue-600 ${
                      activeMenu === item.id ? "text-blue-600" : ""
                    }`}
                  >
                    {item.title}
                    {item.hasSubmenu && ( // Tampilkan ikon chevron jika item menu memiliki sub-menu
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeMenu === item.id ? "rotate-180" : "" // Putar chevron saat menu aktif
                        }`}
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>
            {/* Ikon Sisi Kanan: Pencarian, Pengguna, Keranjang Belanja */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSearch}
                className="p-2 transition-colors duration-200 text-gray-600 hover:text-blue-600"
              >
                <Search className="h-5 w-5" />
              </button>
              <button className="bg-orange-500 font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get to Know Us!
              </button>

              {/* Tombol Menu Mobile (Ikon Hamburger/X) */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 transition-colors duration-200 text-gray-600 hover:text-blue-600"
              >
                {isOpen ? (
                  <X className="h-6 w-6" /> // Ikon X saat menu mobile terbuka
                ) : (
                  <Menu className="h-6 w-6" /> // Ikon Hamburger saat menu mobile tertutup
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeMenuContent && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-xl rounded-b-lg border-t border-gray-200 z-40 animate-fade-in-down">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {activeMenuContent.categories.map((category, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm block py-1"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-4">
                <img
                  src={activeMenuContent.featured.image}
                  alt="Featured"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-gray-900 mb-2">
                  {activeMenuContent.featured.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {activeMenuContent.featured.description}
                </p>
                <button className="bg-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isSearchOpen && (
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search products, categories, brands..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  autoFocus
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-200">
                  <Search className="h-5 w-5" />
                </button>
              </div>
              <button
                onClick={toggleSearch}
                className="px-4 py-3 text-gray-600 hover:text-red-600 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-sm text-gray-500">Popular searches:</span>
              {[
                "Smartphone",
                "Laptop",
                "Headphones",
                "Fashion",
                "Home Decor",
              ].map((term) => (
                <button
                  key={term}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="lg:hidden bg-white border-t"
          style={{
            backgroundColor: isScrolled ? "white" : "rgba(255, 255, 255, 0.95)",
            backdropFilter: !isScrolled ? "blur(10px)" : "none",
          }}
        >
          <div className="px-4 py-3 space-y-1 max-h-96 overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => toggleSubMenu(item.id)}
                  className="w-full flex items-center justify-between px-3 py-3 text-gray-700 hover:rounded-md transition-colors duration-200"
                >
                  <span className="font-medium">{item.title}</span>
                  {item.hasSubmenu && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeMenu === item.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {item.hasSubmenu && activeMenu === item.id && (
                  <div className="pl-4 pb-2 space-y-1">
                    {activeMenuContent &&
                      activeMenuContent.categories.map((category, index) => (
                        <div key={index} className="py-2">
                          <h4 className="font-medium text-gray-900 text-sm uppercase tracking-wide mb-2">
                            {category.title}
                          </h4>
                          {category.items.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href="#"
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
