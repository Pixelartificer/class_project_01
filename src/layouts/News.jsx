
import Container from '../components/Container';
import Flex from '../components/Flex';
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
    <section className="py-27.5 bg-sectionBg01">
      <Container>
        <SubHeading text="Recent News & Articles" className="flex justify-center items-center pb-15"/>

        <Flex>
          <NewsCard  image={NewsImg01} title="Where Should I Buy Next?" authorName="Carter Rosser" authorImg={NewsImg04} date="24/08/2021" description="From romantic getaways to adventurous hikes, find your next..."/>
          <NewsCard  image={NewsImg02} title="Malesuada Fermentum Tortor" authorName="Carter Rosser" authorImg={NewsImg05} date="24/08/2021" description="From romantic getaways to adventurous hikes, find your next..."/>
          <NewsCard  image={NewsImg03} title="Magna Malesuada" authorName="Carter Rosser" authorImg={NewsImg06} date="24/08/2021" description="From romantic getaways to adventurous hikes, find your next..."/>
        </Flex>

      </Container>
    </section>
  )
}

export default News