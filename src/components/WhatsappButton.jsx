import React from 'react';
// import { FaWhatsapp } from 'react-icons/fa';
import wa from '../assets/wa.png';
import DownloadCompro from './DownloadCrompro';

const WhatsappButton = () => {
  const phoneNumber = '6287764444343'; // Ganti dengan nomor WhatsApp yang diinginkan
  const message = 'Halo, saya tertarik dengan product odoo!';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className='relative'>
    <a href={whatsappLink} target='_blank' rel='noopener noreferrer' className='fixed bottom-5 right-5 text-white p-3 rounded-full shadow-lg hover:bg-green-50 transition-all flex items-center justify-center w-14 h-14'>
      {/* <FaWhatsapp size={28} /> */}
      <img src={wa} alt='aa' />
    </a>
<DownloadCompro />
    </div>

  );
};

export default WhatsappButton;
