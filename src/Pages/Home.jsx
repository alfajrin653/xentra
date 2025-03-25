import Navbar from '../Layout/Navbar';
import WhatsappButton from '../components/WhatsappButton';
import HeroSection from '../Layout/HeroSection';
import About from './About';
import herosection1 from '../assets/herosection1.png';



const Content = {
   title1 : 'Simplifying ERP with Odoo',
   title2 : 'for Sustainable Growth',
   backgroundImage : herosection1,
}


const Home = () => {


  return (
    <>
      <Navbar />
      <HeroSection {...Content}/>
      <WhatsappButton />
      <About padding='py-0' />
    </>
  );
};

export default Home;
