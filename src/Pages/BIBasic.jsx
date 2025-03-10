// import Button from '../componet/Button';
import BIBasic from '../assets/BIBasic.png';
import HeroSection from '../Layout/HeroSection';
import Navbar from '../Layout/Navbar';

const BusinessImplementationBasic = () => {
  const herosections = {
    subtitle: 'Business Implementation Basic',
    subtitle2: 'Optimize operational efficiency and drive business growth with an integrated system.',
    buttonText: 'Contact US',
    buttonLink: '#',
    title1: 'All-in-One Solution',
    extraImage: BIBasic,
  };
  return (
    <div>
      <Navbar />
      <HeroSection subtitle={herosections.subtitle} subtitle2={herosections.subtitle2} buttonText={'Contact US'} buttonLink={herosections.buttonLink} title1={herosections.title1} title2={herosections.title2} extraImage={herosections.extraImage} />
      <h1 className='text-2xl font-semibold text-center'>BusinessImplementationBasic</h1>
      {/* <Button> Contact </Button> */}

      <Dashboard />
    </div>
  );
};

// -------------- home modul odoo ----------------

import { useState } from 'react';

// Komponen Sidebar
const Sidebar = ({ setActiveSection }) => {
  const sections = ['Finance', 'Sales', 'Service', 'Marketing', 'Website', 'Productivity', 'Supply Chain', 'Human Resource'];

  return (
    <div className=' rounded-r-[50px] w-64 h-screen bg-primary text-white p-4'>
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          className='block w-[229px] h-[56px] text-left font-inter font-bold p-2 my-1 rounded-[10px] 
                     hover:bg-gray-700 transition'
        >
          {section}
        </button>
      ))}
    </div>
  );
};

// Konten Dinamis
const Content = ({ activeSection }) => {
  const contentData = {
    Finance: {
      title: 'Kelola Keuangan dengan Mudah dan Efisien bersama Odoo Finance',
      description: 'Optimalkan pengelolaan keuangan bisnis Anda dengan Odoo Finance...',
      features: ['Akuntansi', 'Tanda Tangan', 'Pengeluaran', 'Faktur'],
    },
    Service: {
      title: 'Kelola Layanan dengan Odoo Service',
      description: 'Manajemen layanan pelanggan yang lebih efisien...',
      features: ['CRM', 'Helpdesk', 'Project Management'],
    },
    Marketing: {
      title: 'Optimalkan Pemasaran dengan Odoo Marketing',
      description: 'Buat strategi pemasaran lebih efektif...',
      features: ['Email Marketing', 'Social Media', 'SEO Tools'],
    },
  };

  const data = contentData[activeSection] || { title: '', description: '', features: [] };

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold'>{data.title}</h1>
      <p className='text-gray-600'>{data.description}</p>
      <ul className='mt-4'>
        {data.features.map((feature, index) => (
          <li key={index} className='bg-gray-200 p-2 my-2 rounded-lg'>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Komponen Utama (Dashboard)
const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('Finance');

  return (
    <div className='flex'>
      <Sidebar setActiveSection={setActiveSection} />
      <Content activeSection={activeSection} />
    </div>
  );
};

export default BusinessImplementationBasic;
