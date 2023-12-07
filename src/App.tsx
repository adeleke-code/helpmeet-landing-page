import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Crafts from "./components/Crafts";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Artisans from "./components/Artisans";
import Features from "./components/Features";
import Categories from "./components/Categories";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-[#F8F9FF] w-full h-full">
      <Navbar />
      <Categories />
      <Hero />
      <Crafts />
      <Artisans />
      <Features />
      <About />
      <Testimonials />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
