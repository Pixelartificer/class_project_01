import Container from "../components/Container";
import Flex from "../components/Flex";
import PText from "../components/PText";
import SubHeading from "../components/SubHeading";
import PricingCard from "../components/PricingCard";
import { useState } from "react";

const Pricing = () => {
  let [changePrice, setchangePrice]=useState(true)
let handlePrice=()=>{
  setchangePrice(!changePrice)
}

  return (
    <section className="mt-27.5 mb-22.5">
      <Container>
        <SubHeading
          text="Affordable Pricing"
          className="flex justify-center items-center"
        ></SubHeading>

        <Flex className="justify-center! gap-5 pb-14.5 pt-9">
          <PText text="Monthly" className={`text-text18! ${changePrice ? "font-bold!" : "font-normal!"} `}></PText>
          <div onClick={handlePrice} className={`w-22.5 h-10 flex ${changePrice ? "justify-start" : "justify-end"}  rounded-full bg-bgGreen p-1.25`}>
            <div className="w-7.5 h-7.5 rounded-full bg-white "></div>
          </div>
          <PText text="Annualy" className={`text-text18! ${changePrice ? "font-normal!" : "font-bold!"} `}></PText>
        </Flex>

        {
         changePrice
         ?
<Flex>
      <PricingCard title="Free Plan" price="$0" period="/ Monthly" feature1="Access to editing all blocks" feature2="Editing blocks together" feature3="Access to all premium icons" feature4="A dedicated domain" buttonText="Try for Free"></PricingCard>
      <PricingCard title="Free Plan" price="$60" period="/ Monthly" feature1="Access to editing all blocks" feature2="Editing blocks together" feature3="Access to all premium icons" feature4="A dedicated domain" buttonText="Try for Free"></PricingCard>
      <PricingCard title="Free Plan" price="$90" period="/ Monthly" feature1="Access to editing all blocks" feature2="Editing blocks together" feature3="Access to all premium icons" feature4="A dedicated domain" buttonText="Try for Free"></PricingCard>
    </Flex>
         : 
               <Flex>
      <PricingCard title="Free Plan" price="$0" period="/ Annualy" feature1="Access to editing all blocks" feature2="Editing blocks together" feature3="Access to all premium icons" feature4="A dedicated domain" buttonText="Try for Free"></PricingCard>
      <PricingCard title="Free Plan" price="$599" period="/ Annualy" feature1="Access to editing all blocks" feature2="Editing blocks together" feature3="Access to all premium icons" feature4="A dedicated domain" buttonText="Try for Free"></PricingCard>
      <PricingCard title="Free Plan" price="$90" period="/ Annualy" feature1="Access to editing all blocks" feature2="Editing blocks together" feature3="Access to all premium icons" feature4="A dedicated domain" buttonText="Try for Free"></PricingCard>
    </Flex>
        }


    

  

      </Container>
    </section>
  );
};

export default Pricing;
