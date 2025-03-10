import Navbar from '../Layout/Navbar';
import WhatsappButton from '../componet/WhatsappButton';
import HeroSection from '../Layout/HeroSection';
import About from './About';
import herosection from '../assets/herosection.png';

const Home = () => {
  const title1 = 'Simplifying ERP with Odoo';
  const title2 = 'for Sustainable Growth';
  return (
    <>
      <Navbar />
      <HeroSection backgroundImage={herosection} title1={title1} title2={title2} />
      <WhatsappButton />
      <About />
    </>
  );
};

export default Home;
