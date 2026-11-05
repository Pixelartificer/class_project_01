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
    <>
      {/* 
        Responsive UpToDate Section Component:
        - Mobile & Tablet: Vertical stacking (flex-col), fluid vertical padding, and stacked form fields.
        - Desktop (lg:): Side-by-side flex layout with structured width distribution and horizontal newsletter form.
      */}
      <section>
        <Container className="py-16 lg:py-30">
          <Flex className="flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Left Content & Newsletter Form Area */}
            <div className="w-full lg:w-[50%]">
              <SubSubHeading text="OUR NEWSLETTER" />
              
              <SubHeading 
                text="Stay up to date" 
                className="pt-3 lg:pt-5 pb-4 lg:pb-7 text-left" 
              />
              
              <PText 
                text="With our weekly newsletter you will stay informed about important information in the HR world, new Corona work guidelines." 
                className="text-left pb-8 lg:pb-12 text-text14 sm:text-text16" 
              />

              {/* Newsletter Input & Button Group */}
              <Flex className="flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
                <div className="relative flex items-center w-full max-w-md">
                  {/* Mail Icon */}
                  <span className="absolute left-4 text-[#2979b8]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  
                  {/* Input Field */}
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-3 border border-[#b3d4ed] rounded-xl outline-none bg-transparent text-text14 sm:text-text16 text-black"
                  />
                </div>

                <Button 
                  text="Subscribe" 
                  className="py-3! px-6! rounded-xl! bg-[#2B78C6] hover:bg-[#2060a0] text-white font-medium cursor-pointer transition-colors shadow-sm text-center shrink-0" 
                />
              </Flex>
            </div>

            {/* Right Illustration Area */}
            <div className="w-full lg:w-[50%] flex justify-center">
              <Image 
                imageSrc={UpToDateImg} 
                imageAlt="Newsletter Illustration" 
                className="w-full max-w-md lg:max-w-none object-contain"
              />
            </div>

          </Flex>
        </Container>
      </section>
    </>
  );
};

export default UpToDate;