import React from "react";
import Button from "./Button";
import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <section className="h-full flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4">
      {/* Text */}
      <div className="flex flex-col">
        <div className="text-[#2D2D2D] space-y-2 md:space-y-2">
          <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold">
            Connect with <br />
            experienced <span className="text-[#009379]">Artisans</span>
            <br /> in just one click
          </h1>
          <h2 className="text-gray-700 text-sm md:w-[80%]">
            Excellent services and products delivery by the best, highly skilled
            artisans and professionals alive tailored to your needs.
          </h2>

          <div>
            <Button label="Get Started" large primary />
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="w-[70%] h-[200px] md:h-[300px] lg:h-[600px] flex md:justify-end pt-2">
        <HeroSlider />
      </div>
    </section>
  );
}

export default Hero;
