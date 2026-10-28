import Container from "../components/Container";
import Image from "../components/Image";
import PText from "../components/PText";

import Logo from "../../public/Image/logo.png";
import Flex from "../components/Flex";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import FooterList from "../components/FooterList";

const Footer = () => {
  return (
    <footer className="bg-blackText">
      <Container className="pt-24.5 pb-18.5">
        <Flex>
          <div className="w-[42%]">
            <Image imageSrc={Logo} imageAlt="Logo" />

            <PText
              text="Orem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst augue amet, luctus quis gravida nulla netus ut platea."
              className="text-white text-left! pt-6.5 pb-8 leading-7"
            />
            <Flex className="justify-start gap-5 text-[24px] text-white">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </Flex>
          </div>

          <div className="w-[20%] pl-8">
            <strong className="text-text22 text-sText font-raleway">
              Company
            </strong>
            <ul className="flex flex-col gap-y-4 pt-7">
              <FooterList text="About us" />
              <FooterList text="Services" />
              <FooterList text="Blog" />
            </ul>
          </div>

          <div className="w-[20%]">
            <strong className="text-text22 text-sText font-raleway">
              More Links
            </strong>
            <ul className="flex flex-col gap-y-4 pt-7">
              <FooterList text="Blog Details" />
              <FooterList text="Service Details" />
              <FooterList text="BContact" />
            </ul>
          </div>

          <div className="w-[38%]">
            <strong className="text-text22 text-sText font-raleway">
              Contact Details
            </strong>
            <ul className="flex flex-col gap-y-4 pt-7">
              <FooterList text="Amsterdam Netherlands" />
              <FooterList text="+1 62 19 22 705" />
              <FooterList text="7 Days - 8am - 10pm" />
              <FooterList text="info@stdev.com" />
            </ul>
          </div>
        </Flex>
        
      </Container>
      <div className="text-center border-t-2 border-[#FFFFFF14] py-7">
        <p className="text-text18 text-sText">© 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
