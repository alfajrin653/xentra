// Import Komponen
import Card from '../componet/Card';
import Navbar from '../Layout/Navbar';
import WhatsappButton from '../componet/WhatsappButton';
import unduh from '../assets/unduh.png';
import expert from '../assets/WhyXentra/expert.png';
import higtQuality from '../assets/WhyXentra/higtQuality.png';
import odooReady from '../assets/WhyXentra/odooReady.png';
import service from '../assets/WhyXentra/service.png';
import supportOdoo from '../assets/WhyXentra/supportOdoo.png';

// Komponen Hero Section
const HeroSection = () => (
  <div className='flex justify-center items-center bg-primary w-screen h-[121px] mt-3'>
    <h1 className='text-inter font-bold text-center text-6xl text-white'>ABOUT US</h1>
  </div>
);

// Komponen Deskripsi About Us
const AboutDescription = () => (
  <div className='flex justify-center items-center py-10'>
    <p className='text-center text-base w-[1000px] font-inter'>
      Xentra adalah anak perusahaan PT Adinata Mitra Solusi, yang menyediakan solusi teknologi andal bagi bisnis di Indonesia. Kami berfokus pada sistem Enterprise Resource Planning (ERP) berbasis Odoo untuk membantu bisnis mengelola operasional
      secara efisien dan terintegrasi. Sebagai mitra resmi Odoo, kami menawarkan solusi ERP yang efektif, mudah digunakan, dan dapat disesuaikan dengan kebutuhan bisnis.
    </p>
  </div>
);

// Komponen Mission & Vision
const MissionVision = () => (
  <div className='mt-10 grid grid-cols-1 md:grid-cols-2 relative border border-white rounded-lg overflow-hidden'>
    <div className='bg-primary text-white p-6 text-start'>
      <h3 className='text-xl font-semibold'>OUR MISSION</h3>
      <ul className='list-decimal list-inside mt-3'>
        <li>Menyediakan solusi ERP yang mudah diakses dan digunakan oleh semua jenis bisnis.</li>
        <li>Membantu perusahaan mengoptimalkan proses operasional dengan sistem ERP yang fleksibel dan efisien.</li>
        <li>Menjadi mitra teknologi yang membantu bisnis mempercepat transformasi digital.</li>
      </ul>
    </div>
    <div className='absolute left-1/2 top-0 h-[170px] w-[1.5px] bg-white'></div>
    <div className='bg-primary text-white p-6 text-end'>
      <h3 className='text-xl font-semibold'>OUR VISION</h3>
      <p className='mt-3'>Menjadi penyedia solusi ERP terdepan di Indonesia yang membantu bisnis dari berbagai sektor mencapai efisiensi operasional maksimal.</p>
    </div>
  </div>
);

// Komponen Tombol Download
const DownloadButton = () => (
  <a href='https://drive.google.com/uc?export=download&id=1zeodo9W0uHLk2FDmiGoNEAmM6lmxlat4'>
    <button className='fixed w-[141px] h-[39px] border-2 rounded-lg bottom-5 right-5 bg-primary text-white mr-15 p-3 shadow-lg hover:bg-green-600 transition-all flex items-center justify-center'>
      <img src={unduh} alt='unduh' className='ml-0' />
      <span className='text-[10px] font-inter'>Company profile</span>
    </button>
  </a>
);

// componrent card
// Data untuk About Page
const aboutFeatures = [
  { img: odooReady, title: 'Official & Certified Odoo Partner' },
  { img: supportOdoo, title: 'All-in-One Support Odoo' },
  { img: higtQuality, title: 'High Quality Deliverables' },
  { img: expert, title: 'Expert in all versions of Odoo' },
  { img: service, title: 'Service in both enterprise & community editions' },
];

// Komponen Utama About
const About = () => {
  return (
    <>
      <Navbar />
      <div className='py-15'>
        <HeroSection />
        <AboutDescription />
        <MissionVision />
        <div className='mt-16'>
          <Card features={aboutFeatures} />
        </div>
        <div className='flex justify-between items-center'>
          <WhatsappButton />
          <DownloadButton />
        </div>
      </div>
    </>
  );
};

export default About;
