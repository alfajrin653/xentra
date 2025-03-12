import React from 'react';
import ImgBIBasic from '../assets/ImgBIBasic.png';
import HeroSection from '../Layout/HeroSection';  
import Navbar from '../Layout/Navbar';
import Dashboard from './Dashboard';
import ButtonWhatsapp from '../componet/WhatsappButton';
import CycleProduct from './CycleProduct';
import OdooImplementation from './OdooImplementation';  

const BIBasic = () => {
  const herosections = {
    subtitle: 'Business Implementation Basic',
    subtitle2: 'Optimize operational efficiency and drive business growth with an integrated system.',
    buttonText: 'Contact US',
    buttonLink: '#',
    title1: 'All-in-One Solution',
    extraImage: ImgBIBasic,
  };
  
  return (
    <div className='w-full h-screen'> 
      <Navbar />
      <ButtonWhatsapp />
      <HeroSection {...herosections} />
      <Dashboard />
      <CycleProduct />
      <OdooImplementation />
    </div>
  );
};

export default BIBasic;
