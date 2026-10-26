import Button from "../components/Button";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import PText from "../components/PText";
import SubHeading from "../components/SubHeading";
import SubSubHeading from "../components/SubSubHeading";
import UpToDateImg from "../../public/Image/UpToDateImg.png";



const UpToDate = () => {
  return (
    <section>
      <Container className="py-30">
        <Flex>
          <div className="w-[50%] h-30">
          <SubSubHeading text="OUR NEWSLETTER"/>
          <SubHeading text="Stay up to date" className="pt-5 pb-7"/>
          <PText text="With our weekly newsletter you will stay informed about important information in the HR world, new Corona work guidelines." className="text-left pb-12"/>

          <Flex>

<div className="relative flex items-center w-full max-w-md">
  {/* Mail Icon */}
  <span className="absolute left-4 text-[#2979b8]">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  </span>
  
  {/* Input Field */}
  <input
    type="text"

    className="w-95 pl-12 pr-4 py-3 border border-[#b3d4ed] rounded-xl outline-none bg-transparent"
  />
</div>

            <Button text="Subscribe" className= "py-3! rounded-xl!"/>
            
            </Flex>

          </div>




          <div className="w-[50%]">
            <Image imageSrc={UpToDateImg} imageAlt={UpToDateImg}/>
          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default UpToDate