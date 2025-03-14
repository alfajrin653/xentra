import React from "react";
import CardImg from "../../components/Training/CardImg";
import Card from "../../components/Training/Card";
import Section from "../../components/Training/Section";
import Navbar from "../../Layout/Navbar";


const FunctionalTraining = () => {
  return (
    <><Navbar />
    <Section>
    <CardImg Label="Functional Training" Button="Join Training" />
    <div className="flex-1 justify-center items-center p-6 max-w-3xl">
        <h1 className="text-2xl font-inter font-semibold pb-5 ">
        Functional Training bertujuan agar peserta dapat memahami secara menyeluruh fungsionalitas modul Odoo ERP. Melalui pelatihan ini, Anda akan mendapatkan pemahaman yang lebih baik dalam menggunakan Odoo ERP sehari-hari dan memahami konfigurasi modul yang diperlukan.
        </h1>
        <Card 
  title="What You Learn"
  content={[
    
'General Settings & Module Setup',
'Initial Configuration',
'Data Transfer and Migration',
'Beginning Balance',
'Pay Process (Purchase, Inventory, Accounting)', 
'Cash Process (Sales Order, Inventory, Accounting)',
'Specific Processes Managament (Inventory, Manufacturing, Accounting)', 
'Reporting (Basic, Financial)',



  ]}
 
/>
</div>
    </Section>
    </>
  );
};

export default FunctionalTraining;
