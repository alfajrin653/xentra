import React from 'react';
const HeroSection = ({ backgroundImage, title1, title2, subtitle, subtitle2, buttonText, buttonLink, extraImage, isDarkOverlay = true, textAlignment = 'start' }) => {
  return (
    <div className='relative min-h-screen bg-cyan-800 bg-center bg-no-repeat flex items-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={`absolute inset-0 ${isDarkOverlay ? 'bg-black/60' : 'bg-transparent'}`}></div>
      <div className={`relative z-10 text-white text-${textAlignment} p-8 max-w-3xl mx-auto`}>
        {subtitle && <p className='text-lg font-inter font-normal italic '>{subtitle}</p>}
        <h3 className='font-inter font-extrabold text-5xl py-5 '>{title1}</h3>
        <h3 className='font-inter font-extrabold text-5xl  '>{title2}</h3>
        <p className='text-xl font-inter font-normal mb-6 py-3 max-w-[580px]'>{subtitle2}</p>
        {buttonText && buttonLink && (
          <a href={buttonLink} className='bg-white hover:bg-gray-200 w-[166px] h-[41px] text-primary px-6 py-2 rounded-lg font-semibold transition'>
            {buttonText}
          </a>
        )}
      </div>
      {extraImage && <img src={extraImage} alt='Extra' className='relative z-10 w-[924px] h-[653px] ml-8' />}
    </div>
  );
};

export default HeroSection;
