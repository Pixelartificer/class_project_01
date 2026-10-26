import Container from "../components/Container";
import Image from "../components/Image";
import EngagingImg from "../../public/Image/EngagingImg.png";
import SubHeading from "../components/SubHeading";
import PText from "../components/PText";
import Button from "../components/Button";








const Engaging = () => {
  return (
    <section>
     <Container className="flex justify-center items-center gap-10 pt-27.5 pb-17.5">
       <div className="w-[50%]">
    <Image imageSrc={EngagingImg} imageAlt="Engaging Image"/>
      </div>


      <div className="w-[50%]">
        <SubHeading text="Don’t just engage, make it engaging." className="text-left"></SubHeading>
        <PText text="Since 1999. For millions of users. We transform businesses with powerful and adaptable digital solutions." className="text-left pt-11 pb-8"></PText>
        <PText text="Psum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra purus imperdiet a. Ut nisl est at ultricies neque ornare tellus tellus enim." className="text-left pb-11"></PText>

        <Button text="Read More"></Button>
      </div>
     </Container>
    </section>
  );
};

export default Engaging;
