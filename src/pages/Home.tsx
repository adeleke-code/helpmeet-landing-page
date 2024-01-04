import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Crafts from "../components/Crafts";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import ArtisansSection from "../components/ArtisansSection";
import Navbar from "../components/Navbar";

function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;

      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar isVisible={isVisible} />
      <Categories isVisible={isVisible} />

      <Hero />
      <Crafts />
      <ArtisansSection />
      <Features />
      <About />
      <Testimonials />
      <Banner />
      <Footer />
    </>
  );
}

export default Home;
