import React from "react";
import artisans from "../data/artisans";
import { Link } from "react-router-dom";
import thumbsUp from "../assets/icons/thumbsUp.png";
import envelope from "../assets/icons/envelope.png";
import rating from "../assets/icons/star-rating.png";
import shoppingBag from "../assets/icons/shopping-bag.png";

function ArtisansSection() {
  const newArtisans = artisans.slice(0, 8);

  return (
    <section className="h-full pb-8">
      <div className="max-w-7xl mx-auto p-2 lg:p-4 my-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-2">
        {newArtisans.map((artisan) => (
          <div
            key={artisan.coverImage}
            className="lg:w-[90%] rounded-t-xl space-y-2"
          >
            <img
              src={artisan.coverImage}
              alt="Artisan Cover"
              className="rounded-t-xl w-full"
            />
            <div className="space-y-2 md:px-2 lg:px-8">
              <div className="flex items-center gap-2">
                <img src={artisan.avatar} alt="Artisan Avatar" />
                <div className="text-[#2D2D2D]">
                  <p className="text-[16px]">{artisan.name}</p>
                  <p className="text-[12px] md:text-[14px]">
                    {artisan.username}
                  </p>
                </div>
              </div>

              <div className="bg-[#009379] flex items-center justify-between py-2 px-2 lg:px-4 rounded-xl">
                <img src={shoppingBag} alt="Thumbs Up Icon" />
                <p className="uppercase text-[#BFE9F5] text-[11px] md:text-[12px] lg:text-[15px]">
                  Starting at <span className="font-bold">{artisan.price}</span>
                </p>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="flex items-center md:gap-[2px] lg:gap-1">
                  <img src={thumbsUp} alt="Thumbs Up Icon" />
                  <p className="text-[12px] lg:text-[14px]">Like</p>
                </span>

                <span className="flex items-center md:gap-[2px] lg:gap-1">
                  <img src={envelope} alt="Envelope Icon" />
                  <p className="text-[12px] lg:text-[14px]">Message</p>
                </span>

                <span className="flex items-center md:gap-[2px] lg:gap-1 ">
                  <img src={rating} alt="Star Rating Icon" />
                  <p className="text-[12px] lg:text-[14px]">{artisan.rating}</p>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <Link to="/artisans">
          <button className="text-[#2D2D2D] text-xl">See all</button>
        </Link>
      </div>
    </section>
  );
}

export default ArtisansSection;
