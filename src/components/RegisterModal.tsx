import { ChangeEvent, FC, useState } from "react";

import Button from "./Button";
import TextInput from "./TextInput";

import Modal from "@mui/material/Modal";
import { LuUser2 } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

type RegisterModalProps = {
  isOpen: boolean;
  onClose: () => void;
  openLoginModal: () => void;
};

const RegisterModal: FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  openLoginModal,
}) => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserDetails((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleSignUp = () => {
    console.log(userDetails);
    setUserDetails({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="bg-[#F8F9FF] absolute w-[90%] h-[90%]  lg:w-[90%] xl:w-[1000px] md:h-[600px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[30px]">
        <div className="w-full h-full flex md:flex-row">
          <div className="hidden md:flex w-full md:w-[40%] lg:w-[33%] h-full flex-col items-center justify-center gap-2 bg-[#009379] text-[#F8F9FF] md:rounded-l-[30px]">
            <h1 className="text-3xl xl:text-4xl font-bold">Welcome Back</h1>
            <p className="text-sm">Already have an account?</p>
            <Button large label="Sign In" onClick={openLoginModal} />
          </div>

          <div className="w-full md:w-[60%] lg:w-[67%] md:h-full flex items-center justify-center rounded-r-[30px]">
            <div className="w-3/4 text-[#009379] flex flex-col items-center text-center gap-2 md:gap-4">
              <h1 className="text-3xl xl:text-4xl font-bold">Create Account</h1>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-[#009379] p-2 flex items-center">
                  <FaFacebookF size={18} />
                </div>
                <div className="w-8 h-8 rounded-full border border-[#009379] p-2 flex items-center">
                  <FaGoogle size={20} />
                </div>
              </div>

              <div className="w-full space-y-2 md:space-y-6">
                <p className="text-lg">Or register with your email</p>

                <div className="space-y-4 text-base">
                  <TextInput
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    iconComponent={<LuUser2 />}
                    value={userDetails.firstName}
                    onChange={handleInputChange}
                  />

                  <TextInput
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    iconComponent={<LuUser2 />}
                    value={userDetails.lastName}
                    onChange={handleInputChange}
                  />

                  <TextInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    iconComponent={<MdOutlineEmail />}
                    value={userDetails.email}
                    onChange={handleInputChange}
                  />

                  <TextInput
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    iconComponent={<MdOutlineLocalPhone />}
                    value={userDetails.phoneNumber}
                    onChange={handleInputChange}
                  />

                  <TextInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    iconComponent={<MdLockOutline />}
                    value={userDetails.password}
                    onChange={handleInputChange}
                  />

                  <TextInput
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    iconComponent={<MdLockOutline />}
                    value={userDetails.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>

                <Button primary large label="Sign Up" onClick={handleSignUp} />
              </div>
              <small className="block md:hidden">
                Already have an account?{" "}
                <button onClick={openLoginModal} className="underline">
                  Sign In
                </button>
              </small>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RegisterModal;
