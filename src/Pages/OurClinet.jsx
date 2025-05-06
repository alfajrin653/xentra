import { useState, useEffect } from "react";
import CarouselItem from "../components/CarouselItem";
import CarouselButton from "../components/CarouselButton";

import client1 from "../assets/client/logo1.png";
import client2 from "../assets/client/logo2.png";
import client3 from "../assets/client/logo3.png";
import client4 from "../assets/client/logo4.png";
import client5 from "../assets/client/logo5.png";
import client6 from "../assets/client/logo6.png";
import client7 from "../assets/client/logo7.png";
import client8 from "../assets/client/logo8.png";
import client9 from "../assets/client/logo9.png";
import client10 from "../assets/client/logo10.png";


const clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10,];

const OurClient = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 12;

  // Duplikat data agar terasa endless
  const extendedClients = [...clients, ...clients, ...clients];

  // Fungsi untuk pindah ke slide berikutnya
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % extendedClients.length);
  };

  // Fungsi untuk kembali ke slide sebelumnya
  const prevSlide = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + extendedClients.length) % extendedClients.length
    );
  };

  // Auto slide tiap 3 detik
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  // Ambil 12 item dengan sistem loop sambung
  let visibleClients = [];
  if (currentIndex + visibleItems <= extendedClients.length) {
    visibleClients = extendedClients.slice(currentIndex, currentIndex + visibleItems);
  } else {
    const endSlice = extendedClients.slice(currentIndex);
    const startSlice = extendedClients.slice(0, visibleItems - endSlice.length);
    visibleClients = [...endSlice, ...startSlice];
  }

  return (
    <>
      <div id='client' className="pt-30" ></div>
      <div className="relative flex items-center justify-center w-full overflow-hidden p-4 pb-30">
        <CarouselButton direction="left" onClick={prevSlide} />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:grid-rows-3 gap-10 transition-all duration-500">
          {visibleClients.map((img, index) => (
            <CarouselItem key={index} img={img} />
          ))}
        </div>

        <CarouselButton direction="right" onClick={nextSlide} />
      </div>
    </>
  );
};
export default OurClient;
