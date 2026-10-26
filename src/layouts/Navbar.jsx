
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import LitItem from "../components/ListItem";
import NavButton from "../components/NavButton";
import Logo from "../../public/Image/logo.png";


const Navbar = () => {
  return (
    <nav className="bg-heroBg py-4 pb-40">
      <Container>
        <Flex>
          <div>
            <Image imageSrc={Logo} imageAlt="Logo" />
          </div>
          <div>
    <ul className="flex gap-x-8 items-center">
     
       <LitItem text="Home" type={true} ></LitItem>
      <LitItem text="Pages" type={true}></LitItem>
      <LitItem text="About Us"></LitItem>  
      <LitItem text="Services"></LitItem>  
      <LitItem text="Blog"></LitItem>  
      <LitItem text="Contact"></LitItem>   
      <NavButton text="Let's talk"/>  
    </ul>
    

          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
