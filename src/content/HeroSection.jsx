import React from "react";
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w m-16 px-4 sm:px-6 lg:px-8 lg:flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:min-h-[calc(100vh-64px)]">
        <img
          src="\landingL.png"
          alt="Product Image Left"
          className="flex-grow hidden lg:flex object-cover"
        />

        <div className="text-center flex-grow-[4]">
          <p className="text-lg">GROW WITH US</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Expand your brand <br />
            through measurable <br />
            Digital Strategies
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            At BDD, we are players in the integrated digital marketing game,
            devoted to the pursuit of collective sustainable growth that ensures
            lasting success. Our mission is to elevate your business to new
            heights by exploring actionable possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 font-semibold px-8 py-4 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get to Know Us!
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
