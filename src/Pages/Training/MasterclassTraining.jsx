import Masterclass from "../../components/Training/CardMasterClass";
import CardImg from "../../components/Training/CardImg";
import Section from "../../components/Training/Section";
import Navbar from "../../Layout/Navbar";

const MasterclassTraining = () => {
    return (
        <>
        <Navbar />
        <Section>
        <CardImg Label="Functional Training" Button="Join Training" />
        <div className="flex-1 justify-center items-center p-6 max-w-3xl">
            <h1 className="text-2xl font-inter font-semibold pb-5 ">
            Functional Training bertujuan agar peserta dapat memahami secara menyeluruh fungsionalitas modul Odoo ERP. Melalui pelatihan ini, Anda akan mendapatkan pemahaman yang lebih baik dalam menggunakan Odoo ERP sehari-hari dan memahami konfigurasi modul yang diperlukan.
            </h1>
        <Masterclass/>
     
    
    </div>
        </Section>

        </>
      );
    };

export default MasterclassTraining;