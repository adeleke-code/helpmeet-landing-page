import React from "react";
import banner from "../assets/banner-image.png";
import Button from "./Button";

function Banner() {
  return (
    <section className="h-full">
      <div className="max-w-7xl mx-auto pt-4 md:pt-0 px-4 md:px-12 md:my-8 bg-[#FCDDEC] flex flex-col md:flex-row">
        <div className="md:w-1/2 md:py-4 lg:py-20 space-y-6 text-[#2D2D2D]">
          <h4 className="text-[26px] lg:text-[38px] font-bold ">
            Tell us what you do, get
            <br /> clients anywhere!
          </h4>
          <p className="text-base md:text-lg">
            Break limits and explore the endless possibilities
          </p>

          <Button label="Join Helpmeet" primary extraLarge />
        </div>

        <div className="md:w-1/2">
          <img src={banner} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
