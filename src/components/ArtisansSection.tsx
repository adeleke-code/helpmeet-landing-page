import artisans from "../data/artisans";
import { Link } from "react-router-dom";

import ArtisanCard from "./ArtisanCard";

function ArtisansSection() {
  const newArtisans = artisans.slice(0, 8);

  return (
    <section className="h-full w-full xl:max-w-7xl xl:mx-auto pb-8">
      <div className="p-4 my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-8">
        {newArtisans.map((artisan, index) => (
          <ArtisanCard
            key={index}
            name={artisan.name}
            username={artisan.username}
            coverImage={artisan.coverImage}
            avatar={artisan.avatar}
            rating={artisan.rating}
            price={artisan.price}
            likes={artisan.likes || 0}
            description={artisan.description || ""}
          />
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
