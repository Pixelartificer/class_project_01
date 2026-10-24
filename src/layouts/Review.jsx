import Container from "../components/Container";
import Flex from "../components/Flex";
import SubSubHeading from "../components/SubSubHeading";
import SubHeading from "../components/SubHeading";
import PText from "../components/PText";
import { GoStarFill } from "react-icons/go";
import CounteerCard from "../components/CounterCard";
import counter01 from "../../public/Image/counter01.png";
import counter02 from "../../public/Image/counter02.png";
import counter03 from "../../public/Image/counter03.png";

const Review = () => {
  return (
    <section className="relative">
      <div className="bg-[#0D554C] absolute -top-0.5 left-0 -z-10 w-full h-[450px] [clip-path:polygon(0%_0%,100%_0%,100%_100%)]"></div>
      <Container className="shadow-[0px_-1px_49px_2px_rgba(0,0,0,0.69)] p-12.5 rounded-2xl bg-[#F5F5F5]">
        <div >
          <div>
            <Flex>
              <div>
                <SubSubHeading text="Who we are?" />
                <SubHeading
                  className="w-187.5"
                  text="More than 5,000 users around the world are already using STDEV actively"
                />
              </div>

              <div className="w-50 bg-sectionBg rounded-md px-9 py-7.5 flex flex-col justify-center items-center text-center">
                <h1 className="text-[60px]  font-bold text-darkBlueText">
                  4.8
                </h1>

                <Flex className="items-center justify-center gap-2 my-2 ">
                  <GoStarFill className="text-[#FF7282]" />
                  <GoStarFill className="text-[#FF7282]" />
                  <GoStarFill className="text-[#FF7282]" />
                  <GoStarFill className="text-[#FF7282]" />
                  <GoStarFill className="text-[#FF7282]" />
                </Flex>

                <PText text="35 Reviews" className="pt-2.5" />
              </div>
            </Flex>
          </div>

          <div></div>
        </div>

        <div className="pt-12.5">
          <Flex>
            <CounteerCard
              imageSrc={counter01}
              number="70+"
              label="Professionals"
            />
            <CounteerCard
              imageSrc={counter02}
              number="22 Years"
              label="Year of experience"
            />
            <CounteerCard
              imageSrc={counter03}
              number="$40+M"
              label="Fundraised by customers"
            />
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Review;
