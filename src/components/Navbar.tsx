import React from "react";
import Logo from "../assets/logo.png";
import Button from "./Button";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  return (
    <header className="sticky top-0 left-0 right-0 h-16 md:h-20 z-10 shadow-md">
      <nav className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <img src={Logo} alt="Logo" />

        {/* <div className="flex">
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div> */}

        {/* Desktop view */}
        <div className="hidden text-lg md:flex gap-4 items-center">
          <ul className="flex space-x-2 lg:space-x-4 text-[#009379] font-semibold">
            <li>Discover</li>
            <li>Hire</li>
            <li>Jobs</li>
          </ul>
          <div className="flex space-x-2 lg:space-x-4">
            <Button label="Sign Up" large />
            <Button label="Sign In" primary large />
          </div>
        </div>

        {/* Mobile view */}
        <MobileNavbar />
      </nav>
    </header>
  );
}

export default Navbar;
