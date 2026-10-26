
import Container from "../components/Container";
import Flex from "../components/Flex";
import Imasge from "../components/Image";
import Button from "../components/Button";
import HeroImage from "../../public/Image/HeroImg.png";

const Banner = () => {
  return (
    <div className="bg-heroBg pb-32">
      <Container>
      
        <Flex className="items-center justify-between">
          
       
          <div className="w-[45%] text-left">
            <h3 className="text-text18 text-white">Business & Technologies</h3>
            <h1 className="text-text52 text-white font-bold leading-15.5 pt-3 pb-11">
              We help tech companies deliver great software
            </h1>
            <p className="text-white text-text16 leading-7 pb-11">
              Since 1999. For millions of users. We transform businesses with
              powerful and adaptable digital solutions that satisfy the needs of
              today and unlock the opportunities of tomorrow.
            </p>

      
            <div className="relative w-140">
              <input 
                type="text" 
                className="h-15 w-full py-4 px-5 pr-48 bg-white outline-none rounded-md text-black" 
              />
              
              <Button
                className="absolute top-0 right-0 h-full px-6 bg-[#2C83BB] text-white rounded-r-md rounded-none"
                text="Request for Demo"
              />
            </div>
          </div>

        
          <div className="w-[50%] relative">
            <Imasge imageSrc={HeroImage} className="absolute w-172.5 max-w-none -right-25 -top-57.5"  />
          </div>

        </Flex>
      </Container>
    </div>
  );
};

export default Banner;