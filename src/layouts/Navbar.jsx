import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import LitItem from "../components/ListItem";
import NavButton from "../components/NavButton";
import Logo from "../../public/Image/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* 
        Responsive Navbar Component:
        - Mobile & Tablet: Compact bar with hamburger toggle button; collapsible dropdown navigation menu.
        - Desktop (lg:): Full horizontal navigation bar with logo and CTA button.
      */}
      {/* এখানে py-4 lg:py-8 দিয়ে উপর ও নিচের গ্যাপ বা প্যাডিং সমান করা হয়েছে */}
      <nav className="bg-heroBg py-4 lg:py-8 relative z-50">
        <Container>
          <Flex className="items-center justify-between">
            {/* Logo */}

            <div className="w-32 sm:w-36 lg:w-auto">
              <Link to="/" className="inline-block">
                <Image
                  imageSrc={Logo}
                  imageAlt="Logo"
                  className="w-full h-auto object-contain"
                />
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white text-2xl focus:outline-none cursor-pointer p-2"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <ul className="flex gap-x-6 xl:gap-x-8 items-center">
                <Link to="/">
                  {" "}
                  <LitItem text="Home" type={true} />{" "}
                </Link>
                <Link to="/pages">
                  {" "}
                  <LitItem text="Pages" type={true} />{" "}
                </Link>
                <Link to="/about">
                  {" "}
                  <LitItem text="About Us"/>{" "}
                </Link>
                <Link to="/services">
                  {" "}
                  <LitItem text="Services"  />{" "}
                </Link>
                <Link to="/blog">
                  {" "}
                  <LitItem text="Blog"  />{" "}
                </Link>
                <Link to="/contact">
                  {" "}
                  <LitItem text="Contact" />{" "}
                </Link>

                <NavButton text="Let's talk" />
              </ul>
            </div>
          </Flex>

          {/* Mobile & Tablet Dropdown Navigation Menu */}
          {isOpen && (
            <div className="lg:hidden mt-4 p-5 bg-[#0a4639] rounded-2xl shadow-xl border border-[#ffffff1a] transition-all duration-300">
              <ul className="flex flex-col gap-y-4 items-start">
                <Link to="/" onClick={toggleMenu}>
                  <LitItem text="Home" type={true} />
                </Link>
                <Link to="/pages" onClick={toggleMenu}>
                  <LitItem text="Pages" type={true} />
                </Link>
                <Link to="/about" onClick={toggleMenu}>
                  <LitItem text="About Us"  />
                </Link>
                <Link to="/services" onClick={toggleMenu}>
                  <LitItem text="Services" t/>
                </Link>
                <Link to="/blog" onClick={toggleMenu}>
                  <LitItem text="Blog" t />
                </Link>
                <Link to="/contact" onClick={toggleMenu}>
                  <LitItem text="Contact" />
                </Link>
                <div className="pt-2 w-full">
                  <NavButton text="Let's talk" />
                </div>
              </ul>
            </div>
          )}
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
