import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Artisans from "./pages/Artisans";

function App() {
  return (
    <div className="bg-[#F8F9FF] w-full h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artisans" element={<Artisans />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
