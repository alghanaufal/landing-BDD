import React, { useState, useEffect, useRef } from "react";

// Main App component
function App() {
  return (
    <div className="App">
      <ContentSection />
      {/* Inline styles for the application */}
      <style>
        {`
          /* Base styles for the entire app */
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
              sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
              monospace;
          }

          /* Tailwind CSS (assuming it's loaded via CDN or PostCSS) */
          /* If you are using create-react-app or similar, ensure Tailwind is configured */

          /* Custom styles for the vertical product slider */
          .custom-swiper-container {
            width: 100%;
            height: 500px; /* Tinggi kontainer slider */
            overflow: hidden; /* Sembunyikan konten di luar batas */
            border-radius: 1.5rem; /* rounded-3xl */
            position: relative; /* Diperlukan untuk penempatan pagination */
            user-select: none; /* Mencegah pemilihan teks saat menggulir */
          }

          .custom-swiper-wrapper {
            display: flex;
            flex-direction: column; /* Untuk slider vertikal */
            transition: transform 0.5s ease-in-out; /* Transisi halus antar slide */
            height: 100%; /* Pastikan wrapper mengambil tinggi penuh untuk menyelaraskan slide dengan benar */
          }

          .swiper-slide-custom {
            flex-shrink: 0; /* Pastikan slide tidak menyusut */
            width: 100%;
            height: 100%; /* Setiap slide mengambil 100% tinggi kontainer */
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff; /* Latar belakang putih untuk setiap slide */
            padding: 1rem;
            box-sizing: border-box; /* Pastikan padding tidak menambah ukuran total */
          }

          .custom-pagination {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 10;
          }

          .custom-pagination-bullet {
            display: block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #d1d5db; /* Gray-300 */
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .custom-pagination-bullet.active {
            background-color: #3b82f6; /* Blue-600 */
          }

          /* Custom styles for Popular Brands horizontal slider */
          .brand-slider-container {
            overflow: hidden;
            position: relative;
            cursor: grab; /* Grab cursor for the container */
          }

          .brand-slider-container:active {
            cursor: grabbing; /* Grabbing cursor when active */
          }

          .brand-slider-wrapper {
            display: flex;
            transition: transform 0.5s ease-in-out;
            /* Will be managed by JS for infinite loop, so no default transform */
          }

          .brand-slide {
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            box-sizing: border-box;
          }

          .brand-pagination {
            display: flex;
            justify-content: center;
            margin-top: 1.5rem;
            gap: 8px;
          }

          .brand-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: #cbd5e0; /* Gray-300 */
            border-radius: 50%;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .brand-pagination-bullet.active {
            background-color: #3b82f6; /* Blue-600 */
          }
        `}
      </style>
    </div>
  );
}

export default App;

// ContentSection component
function ContentSection() {
  // Data produk populer yang akan ditampilkan di slider
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

  // Data merek populer
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

  const [currentProductSlide, setCurrentProductSlide] = useState(0); // State untuk melacak slide aktif produk
  const productSliderRef = useRef(null); // Ref untuk elemen slider produk
  const productSlideHeightRef = useRef(0); // Ref untuk menyimpan tinggi satu slide produk
  const isProductScrolling = useRef(false); // Ref untuk mencegah gulir cepat produk

  const [currentBrandSlide, setCurrentBrandSlide] = useState(0); // State untuk melacak slide aktif merek
  const brandSliderRef = useRef(null); // Ref untuk elemen slider merek
  const brandSlideWidthRef = useRef(0); // Ref untuk menyimpan lebar satu slide merek
  const isBrandDragging = useRef(false); // Ref untuk melacak apakah sedang di-drag
  const startDragX = useRef(0); // Posisi X awal saat drag dimulai
  const currentTranslateX = useRef(0); // Transformasi X saat ini untuk slider merek
  const animationFrameId = useRef(null); // Untuk mengelola requestAnimationFrame
  const autoplayIntervalBrand = useRef(null); // Untuk autoplay merek
  const clonesNeededRef = useRef(0); // Referensi untuk menyimpan jumlah klon yang dibutuhkan

  // Utility function to get responsive slides per view for brands
  const getBrandsSlidesPerView = () => {
    if (window.innerWidth < 640) return 2;
    if (window.innerWidth < 768) return 3;
    if (window.innerWidth < 1024) return 4;
    if (window.innerWidth < 1280) return 5;
    return 6;
  };

  // Efek untuk menghitung tinggi slide produk dan menambahkan/menghapus event listener mousewheel
  useEffect(() => {
    const calculateProductSlideHeight = () => {
      if (productSliderRef.current) {
        const firstSlide = productSliderRef.current.querySelector(
          ".swiper-slide-custom"
        );
        if (firstSlide) {
          productSlideHeightRef.current = firstSlide.offsetHeight;
        }
      }
    };

    const handleProductWheel = (event) => {
      event.preventDefault();

      if (isProductScrolling.current) return;
      isProductScrolling.current = true;

      const numSlides = popularProducts.length;
      let newSlide = currentProductSlide;

      if (event.deltaY > 0) {
        newSlide = (currentProductSlide + 1) % numSlides;
      } else {
        newSlide = (currentProductSlide - 1 + numSlides) % numSlides;
      }

      setCurrentProductSlide(newSlide);

      setTimeout(() => {
        isProductScrolling.current = false;
      }, 500);
    };

    calculateProductSlideHeight();
    const currentProductSliderContainer =
      productSliderRef.current?.parentElement;
    if (currentProductSliderContainer) {
      currentProductSliderContainer.addEventListener(
        "wheel",
        handleProductWheel,
        {
          passive: false,
        }
      );
    }

    window.addEventListener("resize", calculateProductSlideHeight);

    return () => {
      if (currentProductSliderContainer) {
        currentProductSliderContainer.removeEventListener(
          "wheel",
          handleProductWheel
        );
      }
      window.removeEventListener("resize", calculateProductSlideHeight);
    };
  }, [currentProductSlide, popularProducts.length]);

  // Efek untuk slider merek (horizontal, grab cursor, infinite loop)
  useEffect(() => {
    const slidesPerView = getBrandsSlidesPerView();
    const singleSlideWidth = brandSliderRef.current
      ? brandSliderRef.current.clientWidth / slidesPerView
      : 0;
    brandSlideWidthRef.current = singleSlideWidth;

    const wrapper = brandSliderRef.current;
    if (!wrapper) return;

    // Clone slides for infinite loop
    const setupInfiniteLoop = () => {
      // Clear any existing clones
      Array.from(wrapper.children).forEach((child) => {
        if (child.classList.contains("clone")) {
          wrapper.removeChild(child);
        }
      });

      const originalSlides = Array.from(wrapper.children).filter(child => !child.classList.contains("clone")); // Filter out clones when getting original slides
      const numOriginalSlides = originalSlides.length;
      clonesNeededRef.current = slidesPerView * 2; // Store in ref

      // Append clones of the first slides
      for (let i = 0; i < clonesNeededRef.current; i++) {
        const clone = originalSlides[i % numOriginalSlides].cloneNode(true);
        clone.classList.add("clone");
        wrapper.appendChild(clone);
      }

      // Prepend clones of the last slides
      for (let i = 0; i < clonesNeededRef.current; i++) {
        const clone = originalSlides[numOriginalSlides - 1 - (i % numOriginalSlides)].cloneNode(true);
        clone.classList.add("clone");
        wrapper.prepend(clone);
      }

      // Set initial position to show original content
      wrapper.style.transition = 'none';
      currentTranslateX.current = -clonesNeededRef.current * singleSlideWidth;
      wrapper.style.transform = `translateX(${currentTranslateX.current}px)`;
    };

    setupInfiniteLoop(); // Initial setup

    const updatePosition = () => {
      wrapper.style.transform = `translateX(${currentTranslateX.current}px)`;
    };

    // Autoplay function moved here to capture current `clonesNeededRef.current`
    const autoplayBrand = () => {
        if (!isBrandDragging.current) {
            currentTranslateX.current -= brandSlideWidthRef.current; // Use ref for slide width
            wrapper.style.transition = 'transform 0.5s ease-in-out';
            updatePosition();

            // Loop back if at the end of original slides
            const totalContentWidth = popularBrands.length * brandSlideWidthRef.current;
            const clonesNeeded = clonesNeededRef.current; // Get current value from ref
            const clonedStart = -clonesNeeded * brandSlideWidthRef.current;
            const clonedEnd = -(clonesNeeded + popularBrands.length) * brandSlideWidthRef.current;

            if (currentTranslateX.current <= clonedEnd) {
                setTimeout(() => {
                    wrapper.style.transition = 'none'; // Disable transition for instant jump
                    currentTranslateX.current = clonedStart;
                    updatePosition();
                }, 500); // Match transition duration
            }
        }
    };


    const handleMouseDown = (e) => {
      isBrandDragging.current = true;
      startDragX.current = e.pageX - currentTranslateX.current;
      wrapper.style.transition = 'none'; // Disable smooth transition during drag
      clearInterval(autoplayIntervalBrand.current); // Pause autoplay
    };

    const handleMouseMove = (e) => {
      if (!isBrandDragging.current) return;
      const newTranslateX = e.pageX - startDragX.current;
      currentTranslateX.current = newTranslateX;
      updatePosition();
    };

    const handleMouseUp = () => {
      isBrandDragging.current = false;
      wrapper.style.transition = 'transform 0.5s ease-out'; // Re-enable smooth transition

      // Snap to nearest slide
      const snapTo = Math.round(currentTranslateX.current / singleSlideWidth) * singleSlideWidth;
      currentTranslateX.current = snapTo;
      updatePosition();

      // Restart autoplay after a short delay
      autoplayIntervalBrand.current = setInterval(autoplayBrand, 2500);
    };


    // Initial autoplay start
    autoplayIntervalBrand.current = setInterval(autoplayBrand, 2500);


    wrapper.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    wrapper.addEventListener('mouseleave', handleMouseUp); // End drag if mouse leaves

    // Recalculate on resize
    const handleResize = () => {
      const newSlidesPerView = getBrandsSlidesPerView();
      const newSingleSlideWidth = wrapper.clientWidth / newSlidesPerView;
      brandSlideWidthRef.current = newSingleSlideWidth;
      setupInfiniteLoop(); // Re-setup clones and position on resize
    };
    window.addEventListener('resize', handleResize);


    return () => {
      wrapper.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      wrapper.removeEventListener('mouseleave', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      clearInterval(autoplayIntervalBrand.current);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [popularBrands.length]); // Dependencies for brand slider effect


  // Handler untuk navigasi manual menggunakan titik-titik pagination produk
  const goToProductSlide = (index) => {
    // With custom implementation, this needs to trigger a direct scroll
    setCurrentProductSlide(index);
  };

  // Handler untuk navigasi manual menggunakan titik-titik pagination merek
  const goToBrandSlide = (index) => {
    // With custom implementation, this needs to trigger a direct scroll
    if (brandSliderRef.current && brandSlideWidthRef.current > 0) {
      const slidesPerView = getBrandsSlidesPerView();
      const numClonedSlides = clonesNeededRef.current; // Get consistent clones count
      const targetScroll = (index + numClonedSlides) * brandSlideWidthRef.current;
      brandSliderRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      setCurrentBrandSlide(index); // Update pagination dot
    }
  };

  return (
    <section className="py-16 lg:py-24 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Bagian untuk Kategori Unggulan */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products across various
            categories
          </p>
        </div>

        {/* Grid Kategori */}
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

        {/* Bagian Fitur */}
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

        {/* Bagian Produk Populer dengan Custom Slider Vertikal */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Products
            </h2>
            <p className="text-gray-600">
              Best-selling items loved by our customers
            </p>
          </div>
          {/* Slider Kustom Produk */}
          <div className="custom-swiper-container">
            <div
              ref={productSliderRef}
              className="custom-swiper-wrapper"
              style={{
                transform: `translateY(-${
                  currentProductSlide * productSlideHeightRef.current
                }px)`,
              }}
            >
              {popularProducts.map((product, index) => (
                <div key={index} className="swiper-slide-custom">
                  {/* Konten kartu produk di dalam setiap slide */}
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
              ))}
            </div>
            {/* Titik-titik pagination kustom produk */}
            <div className="custom-pagination">
              {popularProducts.map((_, index) => (
                <span
                  key={index}
                  className={`custom-pagination-bullet ${
                    index === currentProductSlide ? "active" : ""
                  }`}
                  onClick={() => setCurrentProductSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Bagian Merek Populer dengan Custom Slider Horizontal */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Trusted Brands
            </h2>
            <p className="text-gray-600">
              Explore products from the best brands in the industry
            </p>
          </div>
          {/* Slider Kustom Merek */}
          <div className="brand-slider-container">
            <div
              ref={brandSliderRef}
              className="brand-slider-wrapper"
              // No direct style transform here, managed by JS for infinite loop
            >
              {/* Combine original and cloned brands for infinite loop */}
              {[...popularBrands, ...popularBrands, ...popularBrands].map((brand, index) => (
                <div
                  key={index} // Use index here, combined with array for uniqueness if needed
                  className="brand-slide"
                  style={{
                    minWidth: `${100 / getBrandsSlidesPerView()}%`,
                  }}
                >
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
                </div>
              ))}
            </div>
            {/* Titik-titik pagination kustom merek */}
            <div className="brand-pagination">
              {popularBrands.map((_, index) => (
                <span
                  key={index}
                  className={`brand-pagination-bullet ${
                    index === currentBrandSlide ? "active" : ""
                  }`}
                  onClick={() => setCurrentBrandSlide(index)}
                  aria-label={`Go to brand slide ${index + 1}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
