import Container from "../components/Container";
import Flex from "../components/Flex";
import PText from "../components/PText";
import SubHeading from "../components/SubHeading";
import PricingCard from "../components/PricingCard";
import { useState } from "react";

const Pricing = () => {
  const [changePrice, setChangePrice] = useState(true);

  const handlePrice = () => {
    setChangePrice(!changePrice);
  };

  return (
    <>
      <section className="my-16 lg:mt-27.5 lg:mb-22.5">
        <Container>
          {/* Section Heading */}
          <SubHeading
            text="Affordable Pricing"
            className="flex justify-center items-center text-center"
          />

          {/* Pricing Toggle Switch (Flex-এর বদলে সরাসরি div ব্যবহার করা হয়েছে) */}
          <div className="flex justify-center items-center gap-4 pb-10 lg:pb-14.5 pt-6 lg:pt-9 cursor-pointer" onClick={handlePrice}>
            <PText 
              text="Monthly" 
              className={`text-text16 lg:text-text18! ${changePrice ? "font-bold!" : "font-normal!"}`} 
            />
            
            <div 
              className={`w-20 lg:w-22.5 h-9 lg:h-10 flex ${changePrice ? "justify-start" : "justify-end"} rounded-full bg-bgGreen p-1.25 transition-all duration-300 shadow-inner`}
            >
              <div className="w-6.5 lg:w-7.5 h-6.5 lg:h-7.5 rounded-full bg-white shadow-md transition-transform duration-300"></div>
            </div>

            <PText 
              text="Annualy" 
              className={`text-text16 lg:text-text18! ${changePrice ? "font-normal!" : "font-bold!"}`} 
            />
          </div>

          {/* Conditional Pricing Cards Container */}
          {changePrice ? (
            <Flex className="flex-col md:flex-row justify-center items-center lg:justify-between gap-6 lg:gap-7.5 w-full">
              <div className="w-full md:w-[32%] flex justify-center">
                <PricingCard 
                  title="Free Plan" 
                  price="$0" 
                  period="/ Monthly" 
                  feature1="Access to editing all blocks" 
                  feature2="Editing blocks together" 
                  feature3="Access to all premium icons" 
                  feature4="A dedicated domain" 
                  buttonText="Try for Free" 
                  className="w-full"
                />
              </div>
              <div className="w-full md:w-[32%] flex justify-center">
                <PricingCard 
                  title="Standard Plan" 
                  price="$60" 
                  period="/ Monthly" 
                  feature1="Access to editing all blocks" 
                  feature2="Editing blocks together" 
                  feature3="Access to all premium icons" 
                  feature4="A dedicated domain" 
                  buttonText="Try for Free" 
                  className="w-full"
                />
              </div>
              <div className="w-full md:w-[32%] flex justify-center">
                <PricingCard 
                  title="Premium Plan" 
                  price="$90" 
                  period="/ Monthly" 
                  feature1="Access to editing all blocks" 
                  feature2="Editing blocks together" 
                  feature3="Access to all premium icons" 
                  feature4="A dedicated domain" 
                  buttonText="Try for Free" 
                  className="w-full"
                />
              </div>
            </Flex>
          ) : (
            <Flex className="flex-col md:flex-row justify-center items-center lg:justify-between gap-6 lg:gap-7.5 w-full">
              <div className="w-full md:w-[32%] flex justify-center">
                <PricingCard 
                  title="Free Plan" 
                  price="$0" 
                  period="/ Annualy" 
                  feature1="Access to editing all blocks" 
                  feature2="Editing blocks together" 
                  feature3="Access to all premium icons" 
                  feature4="A dedicated domain" 
                  buttonText="Try for Free" 
                  className="w-full"
                />
              </div>
              <div className="w-full md:w-[32%] flex justify-center">
                <PricingCard 
                  title="Standard Plan" 
                  price="$599" 
                  period="/ Annualy" 
                  feature1="Access to editing all blocks" 
                  feature2="Editing blocks together" 
                  feature3="Access to all premium icons" 
                  feature4="A dedicated domain" 
                  buttonText="Try for Free" 
                  className="w-full"
                />
              </div>
              <div className="w-full md:w-[32%] flex justify-center">
                <PricingCard 
                  title="Premium Plan" 
                  price="$900" 
                  period="/ Annualy" 
                  feature1="Access to editing all blocks" 
                  feature2="Editing blocks together" 
                  feature3="Access to all premium icons" 
                  feature4="A dedicated domain" 
                  buttonText="Try for Free" 
                  className="w-full"
                />
              </div>
            </Flex>
          )}

        </Container>
      </section>
    </>
  );
};

export default Pricing;