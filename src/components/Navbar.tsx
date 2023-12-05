import React from "react";
import Button from "./Button";
import Logo from "../assets/logo.png";
import MobileNavbar from "./MobileNavbar";
import SearchIcon from "../assets/icons/SearchIcon";

function Navbar() {
  return (
    <header className="sticky top-0 left-0 right-0 h-16 md:h-20 z-10 bg-[#F8F9FF]">
      <nav className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <img src={Logo} alt="Logo" />

        <div className="hidden lg:block">
          <div className="relative text-lg">
            <input
              type="text"
              placeholder="Search"
              className="w-[500px] py-2 px-4 bg-[#BFE9F5] rounded-3xl focus:outline-none focus:ring focus:border-blue-300"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-2 bg-[#009379] rounded-3xl">
              <SearchIcon />
            </div>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden text-lg md:flex gap-4 items-center">
          <ul className="flex space-x-2 lg:space-x-4 text-[#009379] font-semibold">
            <li>Discover</li>
            <li>Hire</li>
            <li>Jobs</li>
          </ul>
          <div className="flex space-x-2 lg:space-x-4">
            <Button label="Sign Up" />
            <Button label="Sign In" primary />
          </div>
        </div>

        {/* Mobile view */}
        <MobileNavbar />
      </nav>
    </header>
  );
}

export default Navbar;
