import React, { useState, useEffect, useRef, useCallback } from "react";

export default function SpaceSection() {
  const spaceImages = [
    { id: 1, src: "./space.webp" },
    { id: 2, src: "./space.webp" },
    { id: 3, src: "./space.webp" },
    { id: 4, src: "./space.webp" },
    { id: 5, src: "./space.webp" },
  ];
  const originalLength = spaceImages.length;
  const numClones = 2;

  const clonedImages = [
    ...spaceImages.slice(originalLength - numClones),
    ...spaceImages,
    ...spaceImages.slice(0, numClones),
  ];

  const [currentLogicalIndex, setCurrentLogicalIndex] = useState(0);
  const [currentVisualIndex, setCurrentVisualIndex] = useState(numClones);

  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentTranslateX = useRef(0);
  const dragOffset = useRef(0);
  const carouselTrackRef = useRef(null);
  const slideWidthRef = useRef(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const autoplayTimeoutRef = useRef(null);

  const getSlidesPerView = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1280) return 3;
    if (width >= 1024) return 3;
    if (width >= 768) return 2.5;
    if (width >= 640) return 1.5;
    return 1;
  }, []);

  const updateCarouselPositionOnResize = useCallback(() => {
    if (carouselTrackRef.current) {
      const slidesPerView = getSlidesPerView();
      const newSlideWidth =
        carouselTrackRef.current.offsetWidth / slidesPerView;

        if (Math.abs(slideWidthRef.current - newSlideWidth) > 1) {
        slideWidthRef.current = newSlideWidth; 

        const targetOffset = -(currentVisualIndex * newSlideWidth);

        carouselTrackRef.current.style.transition = "none";
        carouselTrackRef.current.style.transform = `translateX(${targetOffset}px)`;
        currentTranslateX.current = targetOffset;

        setTimeout(() => {
          if (carouselTrackRef.current) {
            carouselTrackRef.current.style.transition =
              "transform 0.5s ease-out";
          }
        }, 50);
      }
    }
  }, [currentVisualIndex, getSlidesPerView]); 

  useEffect(() => {
    updateCarouselPositionOnResize(); 
    window.addEventListener("resize", updateCarouselPositionOnResize);
    return () =>
      window.removeEventListener("resize", updateCarouselPositionOnResize);
  }, [updateCarouselPositionOnResize]);

  useEffect(() => {
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
    }

    autoplayTimeoutRef.current = setTimeout(() => {
      let nextLogicalIndex = (currentLogicalIndex + 1) % originalLength;
      setCurrentLogicalIndex(nextLogicalIndex);

      if (
        currentLogicalIndex === originalLength - 1 &&
        nextLogicalIndex === 0
      ) {
        setTransitionEnabled(true);
        setCurrentVisualIndex(originalLength + numClones);
        setTimeout(() => {
          setTransitionEnabled(false); 
          setCurrentVisualIndex(numClones);
          setTimeout(() => setTransitionEnabled(true), 50);
        }, 500); 
      } else {
        
        setCurrentVisualIndex(currentLogicalIndex + 1 + numClones);
      }
    }, 3000);

    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, [currentLogicalIndex, originalLength, numClones, currentVisualIndex]);

  useEffect(() => {
    if (slideWidthRef.current > 0 && carouselTrackRef.current) {
      const targetOffset = -(currentVisualIndex * slideWidthRef.current);

      carouselTrackRef.current.style.transition = transitionEnabled
        ? "transform 0.5s ease-out"
        : "none";
      carouselTrackRef.current.style.transform = `translateX(${targetOffset}px)`;
      currentTranslateX.current = targetOffset; 
    }
  }, [currentVisualIndex, slideWidthRef.current, transitionEnabled]);

  const goToSlide = (index) => {
    setCurrentLogicalIndex(index);
    setCurrentVisualIndex(index + numClones); // Set langsung untuk indeks visual
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setTransitionEnabled(false); // Nonaktifkan transisi selama seret untuk umpan balik instan.
    startX.current = e.pageX;
    dragOffset.current = 0; // Setel ulang offset seret.
    // Hapus autoplay selama interaksi manual
    if (autoplayTimeoutRef.current) {
      clearTimeout(autoplayTimeoutRef.current);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselTrackRef.current) return;
    const diffX = e.pageX - startX.current;
    dragOffset.current = diffX; // Simpan offset seret saat ini.
    carouselTrackRef.current.style.transform = `translateX(${
      currentTranslateX.current + dragOffset.current
    }px)`;
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    setTransitionEnabled(true); // Aktifkan kembali transisi setelah seret berakhir.

    const finalDiffX = e.pageX - startX.current;
    const snapThreshold = slideWidthRef.current * 0.25; // Ambang seret (25% dari lebar slide) untuk menjepret ke berikutnya/sebelumnya.

    let newTargetVisualIndex = currentVisualIndex;

    if (finalDiffX < -snapThreshold) {
      newTargetVisualIndex = Math.min(
        clonedImages.length - 1,
        currentVisualIndex + 1
      );
    } else if (finalDiffX > snapThreshold) {
      newTargetVisualIndex = Math.max(0, currentVisualIndex - 1);
    }
    setCurrentVisualIndex(newTargetVisualIndex);

    if (newTargetVisualIndex >= originalLength + numClones) {
      // Jika dipindahkan ke bagian "mulai" yang dikloning (kloning dari akhir), lompat ke awal asli.
      setTimeout(() => {
        setTransitionEnabled(false); // Nonaktifkan transisi untuk lompatan.
        setCurrentVisualIndex(
          numClones + (newTargetVisualIndex - (originalLength + numClones))
        );
        setTimeout(() => setTransitionEnabled(true), 50); 
      }, 500); 
    } else if (newTargetVisualIndex < numClones) {
      setTimeout(() => {
        setTransitionEnabled(false); 
        setCurrentVisualIndex(originalLength + newTargetVisualIndex);
        setTimeout(() => setTransitionEnabled(true), 50); 
      }, 500);
    }

    let newLogicalIndex =
      (newTargetVisualIndex - numClones + originalLength) % originalLength;
    setCurrentLogicalIndex(newLogicalIndex);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp({ pageX: startX.current + dragOffset.current }); 
    }
  };
  const handleTouchStart = (e) => {
    handleMouseDown({ pageX: e.touches[0].pageX });
  };

  const handleTouchMove = (e) => {
    handleMouseMove({ pageX: e.touches[0].pageX });
  };

  const handleTouchEnd = (e) => {
    handleMouseUp({ pageX: e.changedTouches[0].pageX });
  };

  return (
    <div className="section-space my-20 py-16 px-4 sm:px-6 lg:px-8 bg-[#f8f4f4] rounded-3xl">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Our Space - Where Ideas Take Flight
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
          Step into BDD's Agency - where strategy meets imagination. A space
          designed for collaboration, innovation, and bringing bold ideas to
          life.
        </p>
      </div>

      <div
        className="relative space-slider-container overflow-hidden pb-10 select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Kontainer Slide */}
        <div
          ref={carouselTrackRef}
          className="flex h-full"
          style={{
            transform: `translateX(${
              currentTranslateX.current + dragOffset.current
            }px)`,
            transition: transitionEnabled ? "transform 0.5s ease-out" : "none",
          }}
        >
          {clonedImages.map((item, index) => (
            <div
              key={`${item.id}-${index}`} 
              className="flex-shrink-0 px-2"
              style={{
                width: `${100 / getSlidesPerView()}%`,
                padding: "0 10px", 
                boxSizing: "border-box",
              }}
            >
              <img
                src={item.src}
                alt={`Our Space - Image ${item.id}`}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-2 py-4">
          {spaceImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentLogicalIndex === index
                  ? "bg-gray-900"
                  : "bg-gray-400 opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
