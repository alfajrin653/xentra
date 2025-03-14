import React from "react";
import CardImg from "../../components/Training/CardImg";
import Card from "../../components/Training/Card";
import Section from "../../components/Training/Section";
import Navbar from "../../Layout/Navbar";

const DeveloperTraining = () => {
    return (
        <>
        <Navbar />
<Section>
    <CardImg Label="Developer Training" Button="Join Training" />
    <div className="flex-1 justify-center items-center p-6 max-w-3xl">
        <h1 className="text-2xl font-inter font-semibold pb-5 ">
        Developer Training akan berfokus pada penguasaan keterampilan untuk mengembangkan dan menyesuaikan Odoo, serta mengimplementasikan ide-ide baru ke dalam platform ERP Odoo.
        </h1>
        <Card 
  title="What You Learn"
  content={[
    "Configuring Odoo",
    "Odoo Framework",
    "Understanding Python",
    "Developing Odoo Applications",
    "Designing Custom Reports",
    "Comprehending Odoo ORM and API",
    "Mastering Odoo Customization",
    "Exploring Odoo Modules",

  ]}
 
/>
</div>
    </Section>
        </>
    );
};


export default DeveloperTraining;