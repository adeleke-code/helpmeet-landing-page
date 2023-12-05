import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Crafts from "./components/Crafts";
import Artisans from "./components/Artisans";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="bg-[#F8F9FF] w-full h-full">
      <Navbar />
      <Categories />
      <Hero />
      <Crafts />
      <Artisans />
    </div>
  );
}

export default App;
