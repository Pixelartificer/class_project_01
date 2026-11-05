import Container from "../components/Container";
import PText from "../components/PText";
import Logo from "../../public/Image/logo.png";
import Flex from "../components/Flex";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import FooterList from "../components/FooterList";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-blackText">
        <Container className="py-12 lg:pt-24.5 lg:pb-18.5">
          <Flex className="flex-col lg:flex-row justify-between gap-10 lg:gap-8">
            
            {/* Logo & Description Column */}
            <div className="w-full lg:w-[42%]">
              {/* Fixed Logo with proper aspect ratio */}
             <div className="flex items-center">
  <Link to="/" className="inline-block">
    <img 
      src={Logo.src || Logo} 
      alt="Logo" 
      className="h-8 lg:h-10 w-auto object-contain cursor-pointer"
    />
  </Link>
</div>

              <PText
                text="Orem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst augue amet, luctus quis gravida nulla netus ut platea."
                className="text-white text-left! pt-4 lg:pt-6.5 pb-6 lg:pb-8 leading-6 lg:leading-7 text-text14 lg:text-text16"
              />
              
              <Flex className="justify-start gap-5 text-[20px] lg:text-[24px] text-white">
                <a href="#" className="hover:text-blueText transition-colors" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-blueText transition-colors" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-blueText transition-colors" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </Flex>
            </div>

            {/* Company Links Column */}
            <div className="w-full sm:w-[48%] lg:w-[20%] lg:pl-8">
              <strong className="text-text18 lg:text-text22 text-sText font-raleway">
                Company
              </strong>
              <ul className="flex flex-col gap-y-3 lg:gap-y-4 pt-4 lg:pt-7">
                <FooterList text="About us" />
                <FooterList text="Services" />
                <FooterList text="Blog" />
              </ul>
            </div>

            {/* More Links Column */}
            <div className="w-full sm:w-[48%] lg:w-[20%]">
              <strong className="text-text18 lg:text-text22 text-sText font-raleway">
                More Links
              </strong>
              <ul className="flex flex-col gap-y-3 lg:gap-y-4 pt-4 lg:pt-7">
                <FooterList text="Blog Details" />
                <FooterList text="Service Details" />
                <FooterList text="Contact" />
              </ul>
            </div>

            {/* Contact Details Column */}
            <div className="w-full lg:w-[38%]">
              <strong className="text-text18 lg:text-text22 text-sText font-raleway">
                Contact Details
              </strong>
              <ul className="flex flex-col gap-y-3 lg:gap-y-4 pt-4 lg:pt-7">
                <FooterList text="Amsterdam Netherlands" />
                <FooterList text="+1 62 19 22 705" />
                <FooterList text="7 Days - 8am - 10pm" />
                <FooterList text="info@stdev.com" />
              </ul>
            </div>

          </Flex>
        </Container>

        {/* Copyright Bar */}
        <div className="text-center border-t-2 border-[#FFFFFF14] py-5 lg:py-7">
          <p className="text-text14 lg:text-text18 text-sText">© 2021 All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;