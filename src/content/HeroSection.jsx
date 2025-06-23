import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden mt-4">
      <div className="relative max-w m-16 px-4 sm:px-6 lg:px-8 lg:flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:min-h-[calc(100vh-64px)]">
        <img
          src="\landingL.png"
          alt="Product Image Left"
          className="flex-grow hidden lg:flex object-cover"
        />
        <div className="w-full text-center lg:flex-grow lg:mx-8">
          <p className="text-sm font-semibold uppercase tracking-wider">
            GROW WITH US
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Expand your brand <br className="hidden sm:inline" />
            through measurable <br className="hidden sm:inline" />
            Digital Strategies
          </h1>
          <p className="mx-auto my-4 max-w-2xl text-sm text-gray-600 lg:text-xl">
            At BDD, we are players in the integrated digital marketing game,
            devoted to the pursuit of collective sustainable growth that ensures
            lasting success. Our mission is to elevate your business to new
            heights by exploring actionable possibilities.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <button
              href="#" // Using anchor tag as requested
              className="inline-flex items-center justify-center gap-3 w-fit rounded-lg border border-black bg-[#ffb14c] py-[9px] pl-6 pr-4 font-semibold text-black transition-all duration-300 ease-in-out hover:bg-[#E8A145] hover:shadow-[4px_4px_0px_0px_#222]"
            >
              Get to Know Us!
              <FaArrowRight />
            </button>
          </div>
        </div>
        <img
          src="\landingR.png"
          alt="Product Image Rigth"
          className="flex-grow hidden lg:flex object-cover"
        />
      </div>
    </section>
  );
}
