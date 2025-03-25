// Import Komponen
import Card from '../components/Card';
import Navbar from '../Layout/Navbar';
import WhatsappButton from '../components/WhatsappButton';
import expert from '../assets/WhyXentra/expert.png';
import higtQuality from '../assets/WhyXentra/higtQuality.png';
import odooReady from '../assets/WhyXentra/odooReady.png';
import service from '../assets/WhyXentra/service.png';
import supportOdoo from '../assets/WhyXentra/supportOdoo.png';
import Home from './Home';
import DownloadCompro from '../components/DownloadCrompro';

// Komponen Hero Section
const HeroSection = () => (
  <div className='flex justify-center items-center bg-primary w-screen h-[121px] mt-[1px]'>
    <h1 className='text-inter font-bold text-center text-6xl text-white'>ABOUT US</h1>
  </div>
);

// Komponen Deskripsi About Us
const AboutDescription = () => (
  <div className='flex justify-center items-center py-10'>
    <p className='text-center text-base w-[1000px] font-inter'>
    Xentra adalah anak perusahaan PT Adinata Mitra Solusi, yang menyediakan solusi teknologi andal bagi bisnis di Indonesia. Kami berfokus pada sistem Enterprise Resource Planning (ERP) berbasis Odoo untuk membantu bisnis mengelola operasional secara efisien dan terintegrasi. Sebagai mitra resmi Odoo, kami menawarkan solusi ERP yang efektif, mudah digunakan, dan dapat disesuaikan dengan kebutuhan bisnis, mencakup keuangan, penjualan, pergudangan, hingga manajemen pelanggan. Dengan teknologi inovatif dan dukungan profesional, Xentra berkomitmen mendorong pertumbuhan dan kesuksesan bisnis di berbagai industri.    </p>
  </div>
);

// Komponen Mission & Vision
const MissionVision = () => (
  <div className='mt-10 grid grid-cols-1 md:grid-cols-2 relative rounded-lg overflow-hidden'>
    <div className='bg-primary text-white p-6 text-start'>
      <h3 className='text-xl font-semibold'>OUR MISSION</h3>
      <ul className='list-decimal list-inside mt-3 max-w-[450px]'>
        <li>Solusi ERP yang mudah diakses dan digunakan oleh semua jenis bisnis.</li>
        <li>Membantu perusahaan mengoptimalkan proses operasional dengan sistem ERP yang fleksibel dan efisien.</li>
        <li>Menjadi mitra teknologi yang membantu bisnis mempercepat transformasi digital.</li>
      </ul>
      <div className='border-b-2 border-white pt-10 md:hidden'></div>
    </div>
    <div className='absolute left-1/2 top-0 h-[170px] w-[1.5px]  md:h-full md:w-[2px] md:bg-white'></div>
    <div className='bg-primary text-white p-6 text-end'>
      <h3 className='text-xl font-semibold'>OUR VISION</h3>
      <ul className='list-decimal list-inside mt-3'>
        <ol>Xentra is Official and Certified Odoo Partner</ol>
        <ol>All in One Support Odoo</ol>
        <ol>High quality deliverables</ol>
        <ol>Expert in all versions of Odoo</ol>
        <ol>Service in both enterprise & community editions</ol>
      </ul>
    </div>
  </div>
);

// Komponen Tombol Download


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
const About = ({ padding='pt-15'}) => {
  return (
    <>
      <Navbar />
      <div className={`${padding} pb-15`}>
        <HeroSection />
        <AboutDescription />
        <MissionVision />
        <div className='mt-16'>
          <Card features={aboutFeatures} />
        </div>
        <div className='flex justify-between items-center'>
          <WhatsappButton />
          <DownloadCompro />
        </div>
      </div>
    </>
  );
};

export default About;
