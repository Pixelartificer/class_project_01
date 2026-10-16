import ListItem from "./components/ListItem";
import Button from "./components/Button";
import NewsCard from "./components/NewsCard";
import PricingCard from "./components/PricingCard";
import ProductCard from "./components/ProductCard";
import ClientsCard from "./components/ClientsCard";
import IndustriesCard from "./components/IndustriesCard";
import Imasge from "./components/Imasge";
import img from "../public/Image/img.png"
import nature from "../public/Image/Nature.jpg"

const App = () => {
  return (
  
      <div className=" bg-bgGreen flex flex-wrap gap-3">
        <ul className="flex">
          <ListItem />
        </ul>

        <Button text="Read More" />
        <Button text="Contuct me" />

        <NewsCard
          image={
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt="Team Working"
              className="w-full h-full object-cover"
            />
          }
          title="Where Should I Buy Next?"
          authorName="Carter Rosser"
          authorImg="https://i.pravatar.cc/100?img=12"
          date="24/08/2021"
          description="From romantic getaways to adventurous hikes, find your next..."
        />

        <PricingCard
          title="Free Plan"
          price="$0"
          period="/ monthly"
          feature1="Access to editing all blocks"
          feature2="Editing blocks together"
          feature3="Access to all premium icons"
          feature4="A dedicated domain"
          buttonText="Try for Free"
        />
        <ProductCard
          icon="/Image/img.png" // public ফোল্ডার থেকে লোকাল ইমেজের পাথ
          title="Consulting"
          description="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget."
          linkText="See More"
        />

   <ClientsCard
        quote="Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi."
        authorName="Davis Lubin"
        authorRole="CEO of Fashionon"
        authorImg="https://i.pravatar.cc/100?img=33" 
      />


    
      <IndustriesCard
       
        imageSrc={nature}
        title="FinTech" 
        description="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." 
        linkText="See More" 
      />

      <Imasge imageSrc={img} />










      </div>
   
  );
};

export default App;
