import { FC } from "react";
import MobileNavbar from "./MobileNavbar";
import { FaSearch } from "react-icons/fa";

type Props = {
  isVisible?: boolean;
};

const Navbar: FC<Props> = ({ isVisible }) => {
  return (
    <header
      className={`${
        isVisible
          ? "bg-[#F8F9FF] text-[#2D2D2D] border-b"
          : "bg-[#2D2D2D] text-[#F8F9FF]"
      } sticky top-0 h-16 w-full md:h-20 z-10`}
    >
      <nav className="w-full p-4 xl:max-w-7xl xl:mx-auto flex items-center justify-between">
        <h1 className="font-bold text-3xl">HELPMEET</h1>

        <div className={isVisible ? "hidden lg:block" : "hidden"}>
          <div className="relative text-lg">
            <input
              type="text"
              placeholder="Search for any service..."
              className="bg-[#F8F9FF] text-[#2D2D2D] lg:w-[400px] xl:w-[500px] py-2 px-4 rounded-xl focus:outline-none border"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-3 bg-[#009379] rounded-r-xl">
              <FaSearch color="#F8F9FF" />
            </div>
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden text-base md:flex gap-4 lg:gap-2 xl:gap-8 items-center">
          <ul className="flex gap-4  xl:gap-8 font-semibold">
            <li>Discover</li>
            <li>Hire</li>
            <li>Jobs</li>
            <li>Sell your skills</li>
          </ul>

          <button
            className={`border px-4 py-2 ${
              isVisible ? "border-[#2D2D2D]" : "border-[#F8F9FF]"
            }`}
          >
            Sign In
          </button>
        </div>

        {/* Mobile view */}
        <MobileNavbar />
      </nav>
    </header>
  );
};

export default Navbar;
