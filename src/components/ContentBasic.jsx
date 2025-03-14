import React from 'react';
import contentData from '../data/contentData';

const ContentBasic = ({ activeSection }) => {
  const data = contentData[activeSection] || { title: '', description: '', features: '' };

  return (
    <div className="p-6 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold pb-4">{data.title}</h1>
      <p className="text-gray-600 max-w-3xl text-sm md:text-base">{data.description}</p>

      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <img src={data.image} alt={activeSection} className="rounded-lg w-full md:w-[350px] max-h-[400px]" />
        <img src={data.img} alt={activeSection} className="rounded-lg w-full md:w-[600px] max-h-[400px]" />
      </div>
    </div>
  );
};

export default ContentBasic;
