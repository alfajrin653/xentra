import React from "react";
import { FiMonitor, FiPackage, FiClock, FiCheckCircle } from "react-icons/fi";
import Button from "../componet/Button";
import Navbar from "../Layout/Navbar";
import WhatsappButton from "../componet/WhatsappButton";

const SupportOdoo = () => {
 return (
     <>
     <Navbar />
     <Service />
     <WhatsappButton/>
     </>
 )
  
};


const Service = () => {
    const services = [
        {
          icon: <FiMonitor size={24} className="text-primary" />,
          title: "Layanan Remote dan Kontrol Jarak Jauh",
          description:
            "Minimalkan biaya kunjungan langsung dengan mengandalkan dukungan jarak jauh. Layanan kami memungkinkan pengelolaan dan pemantauan sistem secara real-time melalui internet, VPN, atau aplikasi akses jarak jauh, dengan sesi dukungan minimal 30 menit.",
        },
        {
          icon: <FiPackage size={24} className="text-primary" />,
          title: "Paket Layanan Bulanan",
          description:
            "Dapatkan akses ke layanan lengkap dengan biaya tetap. Paket ini mencakup konfigurasi, kustomisasi, perbaikan bug, pelatihan, dan konsultasi, memberikan solusi menyeluruh untuk kebutuhan bisnis Anda.",
        },
        {
          icon: <FiClock size={24} className="text-primary" />,
          title: "Jam Operasional Layanan",
          description:
            "Tim dukungan Xentra siap membantu Anda setiap hari kerja dari pukul 08.00 hingga 17.00 WIB. Layanan kami tersedia melalui grup WhatsApp dan platform konferensi online seperti Google Meet atau Zoom, memastikan respon cepat dan solusi tepat waktu.",
        },
        {
          icon: <FiCheckCircle size={24} className="text-primary" />,
          title: "Keunggulan Paket",
          description:
            "Dengan sistem billing berbasis jam, Anda hanya membayar sesuai kebutuhan, sehingga memberikan fleksibilitas dan efisiensi biaya yang optimal untuk mendukung transformasi digital dan operasional perusahaan Anda.",
        },
      ];
    
      return (
        <div className="bg-primary text-white min-h-screen flex flex-col justify-center items-center pt-15 px-6 md:px-16">
          {/* Header */}
          <h1 className="text-4xl font-extrabold font-inter text-center pt-10">
            Support Odoo
          </h1>
          <p className="text-center text-lg mt-2">
            Solusi Dukungan Jarak Jauh Berbasis Jam Layanan
          </p>
    
          <div className="flex flex-col md:flex-row w-full max-w-6xl mt-10">
            {/* Bagian Kiri - List Layanan */}
            <div className="flex-1 space-y-10 max-w-[664px]">
              {services.map((item, index) => (
                <div key={index} className="flex gap-4">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
    
                  {/* Teks */}
                  <div className="flex-1 border-l-4 pl-4 border-white">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
    
            {/* Bagian Kanan - Info */}
            <div className="flex items-center mb-5 lg:absolute lg:end-0  bg-white text-black p-6 rounded-xl md:rounded-l-3xl shadow-lg mt-10 md:mt-10 md:ml-10 lg:max-w-[300px] lg:h-[400px]">
              <p className="text-lg font-inter align-center font-semibold">
                Xentra menghadirkan layanan dukungan remote yang fleksibel, di mana
                Anda hanya membayar sesuai jam layanan yang digunakan, bukan biaya
                per proyek. Ini sangat ideal bagi bisnis yang mengutamakan efisiensi
                dan penghematan biaya operasional.
              </p>
            </div>
          </div>
    
          {/* Button */}
          <Button className="h-[41px] w-[166px] rounded-[10px] border-primary font-semibold lg:mt-10"> Contac US</Button>
        </div>
      );
}

export default SupportOdoo;
