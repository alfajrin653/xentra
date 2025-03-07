import Navbar from '../Layout/Navbar';
import WhatsappButton from '../componet/WhatsappButton';
import HeroSection from '../Layout/HeroSection';
import About from './About';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatsappButton />
      <About />
    </>
  );
};

export default Home;
