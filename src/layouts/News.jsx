import Container from '../components/Container';
import SubHeading from '../components/SubHeading';
import NewsCard from '../components/NewsCard';
import NewsImg01 from '../../public/Image/NewsImg01.png';
import NewsImg02 from '../../public/Image/NewsImg02.png';
import NewsImg03 from '../../public/Image/NewsImg03.png';
import NewsImg04 from '../../public/Image/NewsImg04.png';
import NewsImg05 from '../../public/Image/NewsImg05.png';
import NewsImg06 from '../../public/Image/NewsImg06.png';

const News = () => {
  return (
    <>
      {/* 
        Responsive News Section Component:
        - Mobile & Tablet: Fluid vertical padding and centered heading.
        - Desktop (lg:): Three cards in a single row with proper spacing/gaps.
      */}
      <section className="py-16 lg:py-27.5 bg-sectionBg01">
        <Container>
          {/* Section Heading */}
          <SubHeading 
            text="Recent News & Articles" 
            className="flex justify-center items-center pb-10 lg:pb-15 text-center" 
          />

          {/* Grid Container with proper gap between cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7.5 w-full">
            <NewsCard 
              image={NewsImg01} 
              title="Where Should I Buy Next?" 
              authorName="Carter Rosser" 
              authorImg={NewsImg04} 
              date="24/08/2021" 
              description="From romantic getaways to adventurous hikes, find your next..."
            />
            
            <NewsCard 
              image={NewsImg02} 
              title="Malesuada Fermentum Tortor" 
              authorName="Carter Rosser" 
              authorImg={NewsImg05} 
              date="24/08/2021" 
              description="From romantic getaways to adventurous hikes, find your next..."
            />
            
            <NewsCard 
              image={NewsImg03} 
              title="Magna Malesuada" 
              authorName="Carter Rosser" 
              authorImg={NewsImg06} 
              date="24/08/2021" 
              description="From romantic getaways to adventurous hikes, find your next..."
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default News;