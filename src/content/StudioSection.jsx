import React, { useState, useEffect, useRef, useCallback } from "react";

export default function SpaceSection() {
  const spaceImages = [
    { id: 1, src: "./studio.webp" },
    { id: 2, src: "./studio.webp" },
    { id: 3, src: "./studio.webp" },
    { id: 4, src: "./studio.webp" },
    { id: 5, src: "./studio.webp" },
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

      <div className="relative space-slider-container overflow-hidden pb-10 select-none">
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
