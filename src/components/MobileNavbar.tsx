import { FC, useState } from "react";

import Button from "./Button";
import { User } from "./Navbar";

import CloseIcon from "../assets/icons/CloseIcon";
import BurgerMenuIcon from "../assets/icons/BurgerMenuIcon";
import { FaCircleUser } from "react-icons/fa6";

type MobileNavbarProps = {
  onLoginClick: () => void;
  user: User | null;
};

const MobileNavbar: FC<MobileNavbarProps> = ({ onLoginClick, user }) => {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="md:hidden">
      {/* Mobile view Hamburger & Close Icons */}
      <button onClick={handleNav}>
        {openNav ? <CloseIcon /> : <BurgerMenuIcon />}
      </button>

      {/* Mobile view Nav Links */}
      <div
        className={
          openNav
            ? "md:hidden z-20 fixed top-16 right-0 bottom-0 h-full w-3/4 shadow-md px-4 bg-white ease-in-out duration-500"
            : "ease-in-out duration-500 fixed top-16 right-[-100%]"
        }
      >
        {user && (
          <div className="text-black flex items-center gap-2 cursor-pointer">
            <FaCircleUser size={30} />

            <div>
              <p>
                {user.first_name} {user.last_name}
              </p>
              <small>{user.email}</small>
            </div>
          </div>
        )}

        {!user && (
          <div className="py-4 text-lg flex flex-col items-center gap-6">
            <ul className="space-y-4 text-[#009379] font-semibold">
              <li>Discover</li>
              <li>Hire</li>
              <li>Jobs</li>
              <li>Sell your skills</li>
            </ul>

            <Button label="Sign In" primary large onClick={onLoginClick} />
          </div>
        )}
      </div>
    </div>
  );
};
export default MobileNavbar;
