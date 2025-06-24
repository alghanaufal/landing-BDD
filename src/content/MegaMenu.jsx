import React, { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaSearch } from "react-icons/fa";
import { LuArrowUpRight, LuMenu, LuX, LuChevronDown } from "react-icons/lu";

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
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                linkText: "See Service",
                linkHref: "#service-performance-creative",
              },
              {
                title: "Website Development",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                linkText: "See Service",
                linkHref: "#service-website-development",
              },
              {
                title: "Search Engine Optimization",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                linkText: "See Service",
                linkHref: "#service-professional",
              },
              {
                title: "Digital Advertising",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
                title: "Bulletin",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                linkText: "Explore",
                linkHref: "#program-bulletin",
              },
              {
                title: "Events",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                linkText: "Explore",
                linkHref: "#program-events",
              },
              {
                title: "Breakfast Club",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                linkText: "Explore",
                linkHref: "#program-breakfast-club",
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
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                linkText: "More",
                linkHref: "#info-about-us",
              },
              {
                title: "Case Studies",
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                linkText: "More",
                linkHref: "#info-case-studies",
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
      linkHref: "#news-blog",
    },
    {
      id: "loyalty-program",
      title: "Loyalty Program",
      hasSubmenu: false,
      linkHref: "#loyalty-program",
    },
    {
      id: "web-seo-audit",
      title: "Web & SEO Audit",
      hasSubmenu: false,
      linkHref: "#web-seo-audit",
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
              className="lg:hidden p-2 transition-colors duration-200 text-gray-600 hover:text-gray-300"
            >
              {isOpen ? (
                <LuX className="h-6 w-6" />
              ) : (
                <LuMenu className="h-6 w-6" />
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
                    className={`flex items-center px-3 py-2 transition-colors duration-200 font-medium text-gray-600 hover:text-gray-300 ${
                      activeMenu === item.id ? "text-blue-600" : ""
                    }`}
                  >
                    {item.title}
                    {item.hasSubmenu && (
                      <LuChevronDown
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
                className="p-2 transition-colors duration-200 text-gray-600 hover:text-gray-300 hidden lg:block"
              >
                <FaSearch className="h-5 w-5" />
              </button>

              <button className="flex items-center bg-[#4d7bc8] text-white font-semibold px-4 py-2 rounded-lg border-2 border-black hover:bg-black">
                <FaWhatsapp />
                <span className="ml-2">Free Consultation!</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeMenuContent && activeMenuContent.sections && (
        <div
          className="hidden lg:block absolute top-16 left-0 right-0 bg-[#F7F5F0] shadow-xl rounded-b-lg z-40 animate-fade-in-down"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
        >
          {activeMenuContent.sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-wrap border border-gray-200"
            >
              {section.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-grow p-4 border border-gray-200"
                >
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <a
                    href={item.linkHref}
                    className="text-emerald-600 text-sm font-semibold flex items-center group"
                  >
                    {item.linkText}
                    <LuArrowUpRight />
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {isSearchOpen && (
        <div
          className={`absolute top-16 left-0 right-0 z-40 animate-fade-in-down ${
            isScrolled
              ? "bg-white border-t border-gray-200 shadow-lg"
              : "bg-white"
          }`}
        >
          <div className="flex w-full mx-auto items-center px-20 py-6">
            <div className="relative flex items-center w-full border border-gray-300 rounded-full shadow-sm overflow-hidden bg-white">
              <div className="pl-4 pr-2">
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Masukkan kata kunci pencarian"
                className="flex-1 px-4 py-3 outline-none transition-all duration-200 text-gray-700 placeholder-gray-400"
                autoFocus
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                aria-label="Search input"
              />
            </div>
            <div className="p-1">
              <button
                onClick={handleSearchAction}
                className="bg-blue-600 text-white px-6 py-2.5 text-sm font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 whitespace-nowrap"
                aria-label="Cari sekarang"
              >
                Cari Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div
          className="lg:hidden bg-white border-t rounded-b-lg shadow-lg"
          style={{
            backgroundColor: isScrolled ? "white" : "rgba(255, 255, 255, 0.95)",
            backdropFilter: !isScrolled ? "blur(10px)" : "none",
          }}
        >
          <div className="px-4 py-3 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex w-full max-w-2xl mx-auto items-center">
              {/* The main container for the search bar, with border, shadow, and rounded corners. */}
              <div className="relative flex items-center w-full border border-gray-300 rounded-full shadow-sm overflow-hidden bg-white">
                <div className="pl-4 pr-2">
                  <FaSearch />
                </div>
                <input
                  type="text"
                  placeholder="Masukkan kata kunci pencarian"
                  className="flex-1 w-full px-2 py-3 outline-none bg-transparent text-gray-700 placeholder-gray-500"
                  autoFocus
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  aria-label="Search input"
                />

                <div className="p-1">
                  {/* The search button. */}
                  <button
                    onClick={handleSearchAction}
                    className="bg-blue-600 text-white px-6 py-2.5 text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 whitespace-nowrap"
                    aria-label="Cari sekarang"
                  >
                    Cari Sekarang
                  </button>
                </div>
              </div>
            </div>

            {menuItems.map((item) => (
              <div key={item.id}>
                {item.hasSubmenu ? (
                  <button
                    onClick={() => toggleSubMenu(item.id)}
                    className="w-full flex items-center justify-between px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
                    aria-expanded={activeMenu === item.id}
                    aria-controls={`mobile-submenu-${item.id}`}
                  >
                    <span className="font-medium">{item.title}</span>
                    <LuChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        activeMenu === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href={item.linkHref}
                    onClick={toggleMobileMenu}
                    className="block px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200 font-medium"
                  >
                    {item.title}
                  </a>
                )}

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
                              onClick={toggleMobileMenu}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-300 rounded-md transition-colors duration-200"
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
