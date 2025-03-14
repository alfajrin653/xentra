import React from "react";
import TrainingImage from '../assets/Training.png';

const Section = ({ children }) => {
  return (
    <section className="bg-primary text-white min-h-screen flex flex-col lg:flex-row items-center justify-center p-10">
      {children}
    </section>
  );
};

const Card = ({ title, content }) => {
  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-lg max-w-md lg:max-w-2xl lg:h-2xl">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <ul className="space-y-2">
        {content.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-black rounded-full"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CardImg = ({ Label , Button}) => {
  return (
    <div className="flex-1 flex justify-center items-center w-full scale-75 md:scale-100">
    <div className="relative w-full max-w-md">
    {/* Gambar Training */}
    <img
      src={TrainingImage}
      alt="Training Session"
      className="w-full h-[650px] rounded-lg shadow-lg"
    />
    {/* Label Functional Training di Atas */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white text-black font-inter px-4 py-2 rounded-xl font-bold">
      {Label}
    </div>
    {/* Tombol Join Training di Bawah */}
    <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold font-inter px-6 py-2 rounded-xl hover:bg-gray-800 transition">
      {Button}
    </button>
  </div>
  </div>
  );
};






const Training = () => {
  return (
    <Section>
    <CardImg Label="Functional Training" Button="Join Training" />
    <div className="flex-1 justify-center items-center p-6 max-w-3xl">
        <h1 className="text-2xl font-inter font-semibold pb-5 ">
        Functional Training bertujuan agar peserta dapat memahami secara menyeluruh fungsionalitas modul Odoo ERP. Melalui pelatihan ini, Anda akan mendapatkan pemahaman yang lebih baik dalam menggunakan Odoo ERP sehari-hari dan memahami konfigurasi modul yang diperlukan.
        </h1>
        <Card
          title="What You Learn"
          content={[
            "General Settings & Module Setup",
            "Initial Configuration",
            "Data Transfer and Migration",
            "Beginning Balance",
            "Pay Process (Purchase, Inventory, Accounting)",
            "Cash Process (Sales Order, Inventory, Accounting)",
            "Specific Processes Management (Inventory, Manufacturing, Accounting)",
            "Reporting (Basic, Financial)"
          ]}
        />
      </div>
    </Section>
  );
};

export default Training;
