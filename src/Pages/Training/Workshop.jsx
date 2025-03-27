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
        Workshop ini dirancang untuk membantu Anda memahami dan mengimplementasikan Odoo guna meningkatkan efisiensi bisnis. Dengan bimbingan para ahli, peserta akan mempelajari cara konfigurasi, kustomisasi, dan optimalisasi modul Odoo sesuai kebutuhan perusahaan. Segera bergabung dan tingkatkan produktivitas bisnis Anda dengan solusi ERP yang terintegrasi!  
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