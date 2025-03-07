import Navbar from '../Layout/Navbar';
import odoo from '../assets/odoo.png';
import segitiga from '../assets/segitiga.png';
import Card from '../componet/Card';
import expert from '../assets/WhyXentra/expert.png';
import higtQuality from '../assets/WhyXentra/higtQuality.png';

import service from '../assets/WhyXentra/service.png';

const WhatOdoo = () => {
  return (
    <>
      <Navbar />
      <div className=' w-full flex flex-col justify-center items-center lg:relative xl:grid  xl:grid-cols-1 gap-7 pt-15 '>
        {/* Grid 1 */}
        <div className=' lg:row-span-2 lg:col-start-1 py-10 px-10 pb-0 lg:max-h-[450px]'>
          <Cardodoo />
        </div>

        {/* Grid 2 (Hanya Tampil di XL ke Atas) */}
        <div className='col-start-2 row-end-2 justify-center hidden xl:flex'>
          <img src={odoo} alt='' className='w-[450px]' />
        </div>

        {/* Grid 3 (Hanya Tampil di XL ke Atas, Di Bawah Grid 1 jika ≤ LG) */}
        <div className='px-5  lg:pr-10 pt-[70px] col-start-1 row-start-3 xl:col-start-2 xl:row-start-2'>
          <Product />
        </div>

        {/* Grid 4 (Menembus Grid 1) */}
        <div className='col-start-1 row-start-4 pt-10 relative pl-10 max-w-[570px] max-h-[70px] xl:p-0 xl:row-start-3'>
          <Card title='Why Odo' features={whyOdoo} gridCol='grid-cols-2 md:grid-cols-4' />
        </div>
      </div>
    </>
  );
};

const Cardodoo = () => {
  return (
    <>
      <div
        className='flex flex-col border-2 border-primary rounded-3xl 
                      w-full max-w-[749px] h-auto lg:h-[370px] p-5'
      >
        {/* Judul */}
        <h1 className='pl-5 text-2xl font-extrabold text-primary md:text-3xl'>Apa Itu Odoo?</h1>

        {/* Konten */}
        <div
          className='p-5 pt-3 text-base font-medium text-left 
                        text-[16px] md:text-[18px] 
                        max-h-[200px] lg:max-h-[240px] overflow-y-auto'
        >
          <p>
            Odoo/OpenERP adalah rangkaian aplikasi manajemen bisnis yang dirancang untuk usaha kecil, menengah, dan perusahaan multinasional, mencakup berbagai departemen. Sebagai one platform for all solutions, Odoo ERP mengintegrasikan berbagai
            aspek manajemen, seperti manufaktur, keuangan dan akuntansi, pembelian, penjualan, pergudangan, manajemen hubungan pelanggan, sumber daya manusia, point of sale, e-commerce dan website, manajemen proyek, serta pengelolaan dokumen dalam
            satu sistem. Dengan demikian, Odoo meningkatkan efisiensi dan produktivitas bisnis secara keseluruhan.
          </p>
        </div>
      </div>
    </>
  );
};

const Product = () => {
  const products = [
    {
      link: '#',
      title: 'Business Implementation Basic',
    },
    {
      link: '#',
      title: 'Business Implementation Advance',
    },
    {
      link: '#',
      title: 'Konsultasi Odoo',
    },
    {
      link: '#',
      title: 'Support Odoo',
    },
  ];

  return (
    <>
      <div className=' flex flex-col justify-center items-center px-[6px] scale-75 xl:items-start md:scale-100'>
        <h1 className=' pb-5 font-inter font-bold text-2xl text-primary'>Product And Services</h1>
        <div className='flex flex-col gap-2'>
          {products
            .filter((item) => item.title.trim() !== '') // ✅ Filter produk yang title-nya kosong
            .map((item, index) => (
              <div key={index}>
                <a href={item.link} className='block'>
                  <div className='flex border-2 border-primary w-[450px] h-[45px] bg-primary justify-between items-center px-5'>
                    <p className='text-white font-bold font-inter text-[14px]'>{item.title}</p>
                    <img src={segitiga} alt='Arrow Icon' className='max-w-[23px] max-h-[23px]' />
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
const whyOdoo = [
  { img: expert, title: 'All In One Solution' },
  { img: higtQuality, title: 'Customize Modul' },
  { img: service, title: 'Affordable Prize' },
  { img: service, title: '12+million User' },
];

export default WhatOdoo;
