import api from "../api/axios";
import { MdMail } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FC, useEffect, useState } from "react";
import { IoNotifications } from "react-icons/io5";

import MobileNavbar from "./MobileNavbar";

type NavbarProps = {
  isVisible?: boolean;
  onLoginClick: () => void;
};

export type User = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  image_url: string;
  date_joined: string;
  role: string;
};

const Navbar: FC<NavbarProps> = ({ isVisible, onLoginClick }) => {
  const [user, setUser] = useState<User | null>(null);

  const fetchProfile = async () => {
    try {
      const response = await api.get("/auth/users/me/");

      // console.log(response.data);
      setUser(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchProfile();
  }, []);

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
          {user && (
            <>
              <div className="flex items-center gap-4">
                <MdMail size={22} />
                <IoNotifications size={22} />

                <div className="flex items-center gap-2 cursor-pointer">
                  <FaCircleUser size={30} />

                  <div>
                    <p>
                      {user.first_name} {user.last_name}
                    </p>
                    <small>{user.email}</small>
                  </div>
                </div>
              </div>
            </>
          )}

          {!user && (
            <>
              <ul className="flex gap-4 xl:gap-8 font-semibold">
                <li>Discover</li>
                <li>Hire</li>
                <li>Jobs</li>
                <li>Sell your skills</li>
              </ul>

              <button
                className={`border px-4 py-2 ${
                  isVisible ? "border-[#2D2D2D]" : "border-[#F8F9FF]"
                }`}
                onClick={onLoginClick}
              >
                Sign In
              </button>
            </>
          )}
        </div>

        {/* Mobile view */}
        <MobileNavbar onLoginClick={onLoginClick} user={user} />
      </nav>
    </header>
  );
};

export default Navbar;
