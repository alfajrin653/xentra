import React from "react";
import CardImg from "../../components/Training/CardImg";
import WorkshopImage from '../../assets/WorkshopImage.png'
import Section from "../../components/Training/Section";
import Navbar from "../../Layout/Navbar";


const Workshop = () => {
  return (
    <>
    <Navbar />
    <Section>
    <CardImg Label="Functional Training" Button="Join Training" />
    <div className="flex-1 justify-center items-center pt-0 lg:pt-6 p-6 max-w-3xl">
        <h1 className="md:text-2xl text-[18px] font-inter font-semibold pb-5 ">
        Functional Training bertujuan agar peserta dapat memahami secara menyeluruh fungsionalitas modul Odoo ERP. Melalui pelatihan ini, Anda akan mendapatkan pemahaman yang lebih baik dalam menggunakan Odoo ERP sehari-hari dan memahami konfigurasi modul yang diperlukan.
        </h1>
        <div className="flex-1 justify-center items-center p-6 max-w-2xl bg-white">
            <img src={WorkshopImage} alt=""  className="w-full h-full"/>
        </div>
</div>
    </Section>
    </>
  );
};

export default Workshop