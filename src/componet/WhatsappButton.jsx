import React from 'react';
// import { FaWhatsapp } from 'react-icons/fa';
import wa from '../assets/wa.png';

const WhatsappButton = () => {
  const phoneNumber = '6285776937622'; // Ganti dengan nomor WhatsApp yang diinginkan
  const message = 'Halo, saya tertarik dengan layanan Anda!';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappLink} target='_blank' rel='noopener noreferrer' className='fixed bottom-5 right-5 text-white p-3 rounded-full shadow-lg hover:bg-green-50 transition-all flex items-center justify-center w-14 h-14'>
      {/* <FaWhatsapp size={28} /> */}
      <img src={wa} alt='aa' />
    </a>
  );
};

export default WhatsappButton;
