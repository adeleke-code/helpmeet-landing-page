import { useEffect, useState } from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import Crafts from "../components/Crafts";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Categories from "../components/Categories";
import LoginModal from "../components/LoginModal";
import VerifyModal from "../components/VerifyModal";
import Testimonials from "../components/Testimonials";
import RegisterModal from "../components/RegisterModal";
import ResendOtpModal from "../components/ResendOtpModal";
import ArtisansSection from "../components/ArtisansSection";

function Home() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isOtpModalOpen, setOtpModalOpen] = useState(false);
  const [isResendOtpModalOpen, setResendOtpModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;

      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
    setLoginModalOpen(false);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
    setRegisterModalOpen(false);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openOtpModal = () => {
    setOtpModalOpen(true);
    setRegisterModalOpen(false);
  };

  const closeOtpModal = () => {
    setOtpModalOpen(false);
  };

  const openResendOtpModal = () => {
    setResendOtpModalOpen(true);
  };

  const closeResendOtpModal = () => {
    setResendOtpModalOpen(false);
  };

  return (
    <>
      <Navbar isVisible={isVisible} onLoginClick={openLoginModal} />
      <Categories isVisible={isVisible} />

      <Hero />
      <Crafts />
      <ArtisansSection />
      <Features />
      <About />
      <Testimonials />
      <Banner />
      <Footer />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
        openLoginModal={openLoginModal}
        openOtpModal={openOtpModal}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        openRegisterModal={openRegisterModal}
      />

      <VerifyModal
        isOpen={isOtpModalOpen}
        onClose={closeOtpModal}
        openLoginModal={openLoginModal}
        openResendOtpModal={openResendOtpModal}
      />

      <ResendOtpModal
        isOpen={isResendOtpModalOpen}
        onClose={closeResendOtpModal}
        openOtpModal={openOtpModal}
      />
    </>
  );
}

export default Home;
