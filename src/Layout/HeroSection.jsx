import React from 'react';
import herosection from '../assets/herosection.png';
const HeroSection = () => {
  return (
    <div className='relative min-h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${herosection})` }}>
      <div className='absolute inset-0 bg-black/60 flex items-center justify-center'>
        <div className='text-center text-white'>
          <h3 className='font-inter italic text-3xl mb-2'>Simplifying ERP with Odoo</h3>
          <h3 className='font-inter italic text-3xl mb-8'>for Sustainable Growth</h3>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
