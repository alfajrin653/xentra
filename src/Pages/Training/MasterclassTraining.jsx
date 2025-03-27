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
        <div className="flex-1 justify-center items-center pt-0 lg:pt-6 p-6 max-w-3xl">
            <h1 className="md:text-2xl text-[18px] font-inter font-semibold pb-5 ">
            MasterClass Training menggabungkan aspek fungsional dan teknis untuk memberikan pemahaman mendalam tentang fungsionalitas modul serta pengembangan dan kustomisasi Odoo ERP, sehingga proses implementasi dapat lebih efektif dan efisien.
            </h1>
        <Masterclass/>
     
    
    </div>
        </Section>

        </>
      );
    };

export default MasterclassTraining;