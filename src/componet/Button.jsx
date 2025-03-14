import React from 'react';

const Button = ({ onClick, className = 'h-[41px] w-[166px] rounded-[10px] border-primary font-semibold', children }) => {
  
  const phoneNumber = '6285776937622'; // Ganti dengan nomor WhatsApp yang diinginkan
  const message = 'Halo, saya tertarik dengan layanan Anda!';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Fungsi untuk membuka link WhatsApp
  const handleClick = () => {
    window.open(whatsappLink, '_blank'); // Membuka link di tab baru
  };

  return (
    <button onClick={onClick || handleClick} className={`border-2 font-inter text-primary bg-white flex items-center justify-center ${className}`}>
      {children}
    </button>
  );
};

export default Button;