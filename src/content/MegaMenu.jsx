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
                linkHref: "#",
              },
              {
                title: "Website Development",
                description:
                  "Effective website with sufficient performance and aesthetic to fulfil transaction and deliver brand identity",
                linkText: "See Service",
                linkHref: "#",
              },
              {
                title: "Search Engine Optimization",
                description:
                  "Organically increase your website and online store visibility.",
                linkText: "See Service",
                linkHref: "#",
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
                linkHref: "#",
              },
              {
                title: "Digital Advertising",
                description:
                  "Optimize ads performance, install CPAS, solve invisible issues on your online ads campaign.",
                linkText: "See Service",
                linkHref: "#",
              },
            ],
          },
        ],
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
                linkHref: "#",
              },
              {
                title: "Partnership Programs",
                description:
                  "Join our affiliate, reseller, or strategic alliance programs for mutual growth.",
                linkText: "See Program",
                linkHref: "#",
              },
            ],
          },
        ],
        categories: [
          {
            title: "Educational",
            items: [
              "Coding Bootcamps",
              "Design Workshops",
              "Marketing Courses",
            ],
          },
          {
            title: "Partnership",
            items: [
              "Affiliate Program",
              "Reseller Program",
              "Strategic Alliances",
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
                linkHref: "#",
              },
              {
                title: "Careers",
                description:
                  "Discover career opportunities and join our growing team.",
                linkText: "View Jobs",
                linkHref: "#",
              },
              {
                title: "Blog & Insights",
                description:
                  "Stay updated with our latest articles, news, and industry insights.",
                linkText: "Visit Blog",
                linkHref: "#",
              },
              {
                title: "FAQs",
                description: "Find answers to frequently asked questions.",
                linkText: "See FAQs",
                linkHref: "#",
              },
            ],
          },
        ],
        categories: [
          {
            title: "Company Info",
            items: [
              "About Us",
              "Careers",
              "Press",
              "Terms of Service",
              "Privacy Policy",
            ],
          },
          {
            title: "Resources",
            items: ["FAQs", "Blog", "Downloads", "Case Studies"],
          },
        ],
      },
    },
    {
      id: "news-blog",
      title: "News & Blog",
      hasSubmenu: false,
    },
    {
      id: "loyalty-program",
      title: "Loyalty Program",
      hasSubmenu: false,
    },
    {
      id: "web-seo-audit",
      title: "Web & SEO Audit",
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
        <div className="hidden lg:block absolute top-16 left-0 right-0 bg-[#F7F5F0] shadow-xl rounded-b-lg border-t border-gray-200 z-40 animate-fade-in-down">
          {activeMenuContent.sections ? (
            activeMenuContent.sections.map((section, sectionIndex) => {
              // Determine the grid columns based on the number of items or specific section
              let gridColsClass = "md:grid-cols-2"; // Default for md breakpoint

              // Logic to set specific grid columns based on active menu and section index
              if (activeMenu === "services") {
                if (sectionIndex === 0) {
                  // First section of Services: 3 columns
                  gridColsClass += " lg:grid-cols-3";
                } else if (sectionIndex === 1) {
                  // Second section of Services: 2 columns
                  gridColsClass += " lg:grid-cols-2";
                }
              } else if (activeMenu === "program") {
                gridColsClass += " lg:grid-cols-2"; // Program always 2 columns
              } else if (activeMenu === "information") {
                gridColsClass += " lg:grid-cols-4"; // Information always 4 columns
              } else {
                // Fallback for other sections, if needed, based on number of items
                if (section.items.length === 1) {
                  gridColsClass += " lg:grid-cols-1";
                } else if (section.items.length === 2) {
                  gridColsClass += " lg:grid-cols-2";
                } else {
                  gridColsClass += " lg:grid-cols-3"; // Default to 3 for others
                }
              }

              return (
                <div
                  key={sectionIndex}
                  className={`grid grid-cols-1 ${gridColsClass} gap-6 ${
                    sectionIndex > 0 ? "mt-6" : ""
                  }`}
                >
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white p-4 rounded-lg shadow-sm"
                    >
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {item.description}
                      </p>
                      <a
                        href={item.linkHref}
                        className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center group"
                      >
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
                      </a>
                    </div>
                  ))}
                </div>
              );
            })
          ) : (
            /* Fallback for old mainItems structure if sections are not defined */
            <div
              className={`grid grid-cols-1 md:grid-cols-2 ${
                activeMenuContent.mainItems &&
                activeMenuContent.mainItems.length === 1
                  ? "lg:grid-cols-1"
                  : activeMenuContent.mainItems &&
                    activeMenuContent.mainItems.length === 2
                  ? "lg:grid-cols-2"
                  : "lg:grid-cols-3"
              } gap-6`}
            >
              {activeMenuContent.mainItems &&
                activeMenuContent.mainItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {item.description}
                    </p>
                    <a
                      href={item.linkHref}
                      className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center group"
                    >
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
                    </a>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}

      {isSearchOpen && (
        <div className="hidden lg:block bg-white border-t border-gray-200 shadow-lg animate-fade-in-down">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Cari produk, kategori, merek..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                  autoFocus
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                  onClick={handleSearchAction}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
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

      {isOpen && (
        <div
          className="lg:hidden bg-white border-t"
          style={{
            backgroundColor: isScrolled ? "white" : "rgba(255, 255, 255, 0.95)",
            backdropFilter: !isScrolled ? "blur(10px)" : "none",
          }}
        >
          <div className="px-4 py-3 space-y-4 max-h-96 overflow-y-auto">
            <div className="w-full">
              <div className="flex items-center space-x-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Masukkan kata kunci pencarian"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  <button
                    onClick={handleSearchAction}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
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
                    {item.content &&
                      item.content.categories &&
                      item.content.categories.map((category, index) => (
                        <div key={index} className="py-2">
                          <h4 className="font-medium text-gray-900 text-sm uppercase tracking-wide mb-2">
                            {category.title}
                          </h4>
                          {category.items &&
                            category.items.map((subItem, subIndex) => (
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
