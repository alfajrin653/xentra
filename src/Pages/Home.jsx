import Navbar from '../Layout/Navbar';
import WhatsappButton from '../components/WhatsappButton';
import HeroSection from '../Layout/HeroSection';
import About from './About';
import herosection1 from '../assets/herosection1.png';
import OurClient from './OurClinet';
import ContactInfo from './Contact';
import Footer from '../Layout/Footer';
// import DownloadCompro from '../components/DownloadCrompro';



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
      <OurClient padding='py-0' />
      <ContactInfo padding='py-0' />
      <Footer />
    </>
  );
};

export default Home;
