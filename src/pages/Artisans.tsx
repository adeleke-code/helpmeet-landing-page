import artisans from "../data/artisans";
import Crafts from "../components/Crafts";
import Footer from "../components/Footer";
import ArtisanCard from "../components/ArtisanCard";

function Artisans() {
  const newArtisans = artisans.slice(8);

  return (
    <>
      <Crafts />
      <div className="max-w-7xl mx-auto p-2 lg:p-4 my-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-2">
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

      <Footer />
    </>
  );
}

export default Artisans;
