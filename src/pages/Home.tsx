import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Crafts from "../components/Crafts";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Testimonials from "../components/Testimonials";
import ArtisansSection from "../components/ArtisansSection";

function Home() {
  return (
    <>
      <Categories />
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
