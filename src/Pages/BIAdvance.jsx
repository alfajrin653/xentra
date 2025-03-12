import HeroSection from "../Layout/HeroSection"
import Navbar from "../Layout/Navbar"
import ButtonWhatsapp from "../componet/WhatsappButton"
import BIAdvance from "../assets/BIAdvance.png"
import BI from '../assets/Advance/BI.png'
import DO from '../assets/Advance/DO.png'
import IOT from '../assets/Advance/IOT.png'
import IS from '../assets/Advance/IS.png'
import odoodraft from '../assets/Advance/odoodraft.png'



const Herosections = {
    subtitle: 'Business Implementation Advance',
    subtitle2: 'Optimizing Enterprise Operations with Odoo ERP',
    buttonText: 'Contact US',
    buttonLink: '#',
    title1: 'Optimizing Enterprise Operations with Odoo ERP ',
    backgroundImage: BIAdvance,
}

const BusinessImplementationAdvance = () => {
    return (
        <div>
            <Navbar />
            <ButtonWhatsapp />
            <HeroSection posetion="absolute" {...Herosections} />
            <ContentAvance/>
            <Integrasi/>
        </div>
    )
}



const ContentAvance = () => {
 const DataAdvance = [
    {
        title: 'Business Intelligence',
        decription: 'Explore, visualize, and manage data to generate strategic insights with BI. Enable faster and more accurate decision-making through in-depth data analysis.',
        img: BI
 },
    {
        title: 'Database Optimization',
        decription: 'Optimize database performance to handle large volumes of data, improve security, and ensure regular maintenance to prevent data loss or corruption.',
        img: DO
 },
    {
        title: 'Infrastructure Solutions',
        decription: 'Boost system performance, security, and scalability. A customized infrastructure enables seamless integration with other systems and provides full control over enterprise IT management.',
        img: IOT
 },
    {
        title: 'IoT Integration',
        decription: 'Collect and analyze data from IoT devices in real time to enhance operational efficiency, optimize resource management, and drive smarter decision-making.',
        img: IS
 },

]

    return (
        <div className="flex justify-center items-center flex-col pt-10">
        <h1 className="flex font-extrabold font-inter font-primary text-4xl pt-6 pb-0 ">Business Implementation Advance</h1>
        <div className="flex flex-wrap justify-center items-center gap-5 py-5 
  lg:flex-row lg:flex md:grid md:grid-cols-2 scale-75 md:scale-100">
    
  
  {DataAdvance.map((DataAdvance, index) => (
    <div key={index} 
      className={`flex flex-col justify-center items-center py-10 
        ${index >= 4 ? "md:flex-row" : ""}`} 
    >
      <img src={DataAdvance.img} alt=""  className="max-h-[209px]"/>
      <h3 className="font-bold font-inter text-xl pb-5">{DataAdvance.title}</h3>
      
      {/* Kondisi: Jika index genap (0,2,4), maka background gelap */}
      <div
        className={`flex justify-center items-center border-2 border-primary 
          h-[310px] w-[330px] px-2 ${
            index % 2 === 0 ? "bg-[#003f3f] text-white" : "bg-white text-black"
          }`}
      >
        <p className="text-center">{DataAdvance.decription}</p>
      </div>
    </div>
  ))}
</div>
</div>
    )
}


const Integrasi = () => {
    return (
        <div className="py-20">        
        <h1 className=' font-bold text-center text-4xl pb-0'>Maksimalkan Potensi Bisnis dengan Integrasi Odoo</h1>
        <img src={odoodraft} alt="kick off metiing" />
        </div>
    

        
    )
}


export default BusinessImplementationAdvance