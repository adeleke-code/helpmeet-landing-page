import { ChangeEvent, FC, useState } from "react";

import Button from "./Button";
import TextInput from "./TextInput";

import Modal from "@mui/material/Modal";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  openRegisterModal: () => void;
};

const LoginModal: FC<LoginModalProps> = ({
  isOpen,
  onClose,
  openRegisterModal,
}) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleSignIn = () => {
    console.log(user);
    setUser({ email: "", password: "" });
  };
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="bg-[#F8F9FF] absolute w-[90%] h-[80%] lg:w-[900px] md:h-[500px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[30px]">
        <div className="w-full h-full flex md:flex-row">
          <div className="w-full h-full md:w-[60%] lg:w-[67%] my-4 md:py-0 flex items-center justify-center">
            <div className="w-full lg:w-3/4 text-[#009379] flex flex-col items-center text-center gap-4 rounded-l-[30px]">
              <h1 className="text-3xl font-bold">Sign in to HelpMeet</h1>

              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full border border-[#009379] p-2 flex items-center">
                  <FaFacebookF size={18} />
                </div>

                <div className="w-8 h-8 rounded-full border border-[#009379] p-2 flex items-center">
                  <FaGoogle size={20} />
                </div>
              </div>

              <div className="w-3/4 space-y-6">
                <p className="text-lg">Or use your email</p>

                <div className="space-y-4">
                  <TextInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    iconComponent={<MdOutlineEmail />}
                    value={user.email}
                    onChange={handleInputChange}
                  />

                  <TextInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    iconComponent={<MdLockOutline />}
                    value={user.password}
                    onChange={handleInputChange}
                  />

                  <small className="text-[#BFAC05]">
                    <i>Forgot your password?</i>{" "}
                    <span className="underline">Click Here!</span>
                  </small>
                </div>

                <Button primary large label="Sign In" onClick={handleSignIn} />
              </div>
              <small className="block md:hidden">
                Don't have an account?{" "}
                <button onClick={openRegisterModal} className="underline">
                  Sign Up
                </button>
              </small>
            </div>
          </div>

          <div className="hidden md:flex md:w-[40%] lg:w-[33%] flex-col items-center justify-center gap-4 bg-[#009379] text-[#F8F9FF] md:rounded-r-[30px]">
            <h1 className="text-3xl font-bold">Hello, Buddy</h1>
            <p className="text-sm">Enter your details to start up HelpMeet</p>

            <Button large label="Sign Up" onClick={openRegisterModal} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
