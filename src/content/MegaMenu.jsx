import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, User, ShoppingCart, Search } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function MegaMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
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
      setIsSearchOpen(false);
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
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isOpen) {
      setIsOpen(false);
    }
    setActiveMenu(null);
  };

  const handleSearchAction = () => {
    console.log("Melakukan pencarian untuk:", searchText);
  };

  const menuItems = [
    {
      id: "services",
      title: "Services",
      hasSubmenu: true,
      content: {
        sections: [
          {
            items: [
              {
                title: "Performance Creative",
                description:
                  "Create ads-ready contents to better communicate your brand message.",
                linkText: "See Service",
                linkHref: "#service-performance-creative",
              },
              {
                title: "Website Development",
                description:
                  "Effective website with sufficient performance and aesthetic to fulfil transaction and deliver brand identity.",
                linkText: "See Service",
                linkHref: "#service-website-development",
              },
              {
                title: "Search Engine Optimization",
                description:
                  "Organically increase your website and online store visibility.",
                linkText: "See Service",
                linkHref: "#service-seo",
              },
            ],
          },
          {
            items: [
              {
                title: "Professional Service",
                description:
                  "Tailored training program guided by industry experts and professionals.",
                linkText: "See Service",
                linkHref: "#service-professional",
              },
              {
                title: "Digital Advertising",
                description:
                  "Optimize ads performance, install CPAS, solve invisible issues on your online ads campaign.",
                linkText: "See Service",
                linkHref: "#service-digital-advertising",
              },
            ],
          },
        ],
      },
    },
    {
      id: "program",
      title: "Program",
      hasSubmenu: true,
      content: {
        sections: [
          {
            items: [
              {
                title: "Educational Programs",
                description:
                  "Explore our coding bootcamps, design workshops, and marketing courses.",
                linkText: "See Program",
                linkHref: "#program-educational",
              },
              {
                title: "Partnership Programs",
                description:
                  "Join our affiliate, reseller, or strategic alliance programs for mutual growth.",
                linkText: "See Program",
                linkHref: "#program-partnership",
              },
              {
                title: "Partnership Programs",
                description:
                  "Join our affiliate, reseller, or strategic alliance programs for mutual growth.",
                linkText: "See Program",
                linkHref: "#program-partnership",
              },
            ],
          },
        ],
      },
    },
    {
      id: "information",
      title: "Information",
      hasSubmenu: true,
      content: {
        sections: [
          {
            items: [
              {
                title: "About Us",
                description: "Learn about our company, mission, and values.",
                linkText: "Read More",
                linkHref: "#info-about-us",
              },
              {
                title: "Careers",
                description:
                  "Discover career opportunities and join our growing team.",
                linkText: "View Jobs",
                linkHref: "#info-careers",
              },
            ],
          },
        ],
      },
    },
    {
      id: "news-blog",
      title: "News & Blog",
      hasSubmenu: false,
      linkHref: "#news-blog", // Added direct link for non-submenu items
    },
    {
      id: "loyalty-program",
      title: "Loyalty Program",
      hasSubmenu: false,
      linkHref: "#loyalty-program", // Added direct link
    },
    {
      id: "web-seo-audit",
      title: "Web & SEO Audit",
      hasSubmenu: false,
      linkHref: "#web-seo-audit", // Added direct link
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
      <div className="max-w mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 transition-colors duration-200 text-gray-600 hover:text-blue-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <img
              src={isMobile ? "/Logo-S.png" : "/Logo.png"}
              alt="Logo"
              className={`flex-shrink-0 ${isMobile ? "ml-8" : ""}`}
            />
          </div>

          <div className="flex items-center space-x-4 lg:space-x-8">
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                >
                  <button
                    className={`flex items-center px-3 py-2 transition-colors duration-200 font-medium text-gray-700 hover:text-blue-600 ${
                      activeMenu === item.id ? "text-blue-600" : ""
                    }`}
                  >
                    {item.title}
                    {item.hasSubmenu && (
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeMenu === item.id ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSearch}
                className="p-2 transition-colors duration-200 text-gray-600 hover:text-blue-600 hidden lg:block"
              >
                <Search className="h-5 w-5" />
              </button>

              <button className="flex items-center bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg">
                <FaWhatsapp /> Free Consultation!
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeMenuContent && (
        <div
          className="hidden lg:block absolute top-16 left-0 right-0 bg-[#F7F5F0] shadow-xl rounded-b-lg border-t border-gray-200 z-40 animate-fade-in-down px-8 py-6"
          onMouseEnter={() => handleMouseEnter(activeMenu)} // Keep menu open if mouse re-enters content
        >
          {activeMenuContent.sections &&
            activeMenuContent.sections.map((section, sectionIndex) => {
              // Determine the grid columns based on the active menu and section index
              let gridColsClass = "md:grid-cols-2"; // Default for md breakpoint

              if (activeMenu === "services") {
                if (sectionIndex === 0) {
                  gridColsClass = "lg:grid-cols-3"; // First section of Services: 3 columns
                } else if (sectionIndex === 1) {
                  gridColsClass = "lg:grid-cols-2"; // Second section of Services: 2 columns
                }
              } else if (activeMenu === "program") {
                gridColsClass = "lg:grid-cols-2"; // Program always 2 columns
              } else if (activeMenu === "information") {
                gridColsClass = "lg:grid-cols-4"; // Information always 4 columns
              } else {
                // Fallback for other sections, if needed, based on number of items
                if (section.items.length === 1) {
                  gridColsClass = "lg:grid-cols-1";
                } else if (section.items.length === 2) {
                  gridColsClass = "lg:grid-cols-2";
                } else {
                  gridColsClass = "lg:grid-cols-3"; // Default to 3 for others
                }
              }

              return (
                <div
                  key={sectionIndex}
                  className={`grid grid-cols-1 ${gridColsClass} gap-6 ${
                    sectionIndex > 0 ? "mt-6 pt-6 border-t border-gray-200" : ""
                  }`}
                >
                  {section.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.linkHref}
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 block"
                    >
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {" "}
                        {/* Added line-clamp for description */}
                        {item.description}
                      </p>
                      <span className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center group">
                        {item.linkText}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover:translate-x-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </a>
                  ))}
                </div>
              );
            })}
        </div>
      )}

      {/* Desktop Search Bar */}
      {isSearchOpen && (
        <div className="hidden lg:block bg-white border-t border-gray-200 shadow-lg animate-fade-in-down">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Cari produk, kategori, merek..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 font-inter"
                  autoFocus
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") handleSearchAction();
                  }}
                />
                <button
                  onClick={handleSearchAction}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  aria-label="Perform search"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
              <button
                onClick={toggleSearch}
                className="px-4 py-3 text-gray-600 hover:text-red-600 transition-colors duration-200 rounded-md"
                aria-label="Close search bar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-sm text-gray-500">Pencarian populer:</span>
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
                  onClick={() => setSearchText(term)}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className="lg:hidden bg-white border-t rounded-b-lg shadow-lg"
          style={{
            // Apply slight transparency and blur when not scrolled for a modern look
            backgroundColor: isScrolled ? "white" : "rgba(255, 255, 255, 0.95)",
            backdropFilter: !isScrolled ? "blur(10px)" : "none",
          }}
        >
          <div className="px-4 py-3 space-y-4 max-h-[80vh] overflow-y-auto">
            {" "}
            {/* Added max-height for scrollability */}
            {/* Mobile Search Bar (always visible when menu is open) */}
            <div className="w-full sticky top-0 bg-white pt-1 pb-3 -mx-4 px-4 border-b border-gray-200 z-10">
              {" "}
              {/* Sticky search bar */}
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Masukkan kata kunci pencarian"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 font-inter"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") handleSearchAction();
                    }}
                  />
                  <button
                    onClick={handleSearchAction}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                    aria-label="Perform search"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
                <button
                  onClick={handleSearchAction}
                  className="bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Cari sekarang
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-sm text-gray-500">
                  Pencarian populer:
                </span>
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
                    onClick={() => setSearchText(term)}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
            {/* Mobile Navigation Links */}
            {menuItems.map((item) => (
              <div key={item.id}>
                {item.hasSubmenu ? (
                  <button
                    onClick={() => toggleSubMenu(item.id)}
                    className="w-full flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200 font-inter"
                    aria-expanded={activeMenu === item.id}
                    aria-controls={`mobile-submenu-${item.id}`}
                  >
                    <span className="font-medium">{item.title}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeMenu === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href={item.linkHref}
                    onClick={toggleMobileMenu} // Close menu when direct link is clicked
                    className="block px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200 font-medium font-inter"
                  >
                    {item.title}
                  </a>
                )}

                {/* Mobile Submenu Content (using sections.items) */}
                {item.hasSubmenu && activeMenu === item.id && (
                  <div
                    id={`mobile-submenu-${item.id}`}
                    className="pl-4 pb-2 space-y-1 bg-gray-50 rounded-md py-2 transition-all duration-300 ease-in-out"
                  >
                    {item.content &&
                      item.content.sections &&
                      item.content.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="py-1">
                          {section.items.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.linkHref}
                              onClick={toggleMobileMenu} // Close menu when a submenu item is clicked
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200 font-inter"
                            >
                              {subItem.title}
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
