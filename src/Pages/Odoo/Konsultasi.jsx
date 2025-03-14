import Analyst from '../../assets/Konsultasi/Analyst.png'
import Design from '../../assets/Konsultasi/Design.png'
import Customization from '../../assets/Konsultasi/Customization.png'
import Implementasi from '../../assets/Konsultasi/Implementasi.png'
import Navbar from '../../Layout/Navbar'
import Button from '../../components/Button'



const Konsultasi = () => {
    return (
    <>
            <Navbar/>      
        <ContentKonsultan />

        </>
      
    )

}


const ContentKonsultan = () => {
 const DataAdvance = [
    {
        title: 'Analisis Kebutuhan',
        decription: 'Xentra menyediakan layanan analisis kebutuhan yang komprehensif untuk menggali setiap detail proses bisnis Anda. Pendekatan ini memastikan solusi Odoo yang diterapkan tepat sasaran dan selaras dengan tujuan strategis perusahaan.',
        img: Analyst
 },
    {
        title: 'Design Template',
        decription: 'Xentra menghadirkan desain mockup inovatif yang menyajikan representasi visual dari implementasi Odoo, disesuaikan dengan alur kerja bisnis Anda. Hal ini memudahkan proses evaluasi dan penyesuaian sebelum tahap pengembangan dimulai.',
        img: Design
 },
    {
        title: 'Customization Modul ',
        decription: ' Xentra menawarkan penyesuaian modul Odoo yang terintegrasi dengan baik, dirancang khusus untuk memenuhi kebutuhan operasional perusahaan Anda. Konfigurasi yang presisi ini mendukung sistem yang efisien dan lancar.',
        img: Customization
 },
    {
        title: 'Implementasi',
        decription: 'Xentra melaksanakan implementasi Odoo dengan metode yang terstruktur dan profesional, memastikan setiap modul terintegrasi sempurna ke dalam sistem bisnis Anda. Pendekatan ini mendukung transformasi digital dan meningkatkan efisiensi operasional secara menyeluruh.',
        img: Implementasi
 },

]

    return (
        <div className="flex justify-center items-center flex-col pt-10">
        <h1 className="flex  font-extrabold font-inter font-primary text-4xl pt-6 pb-0 "> Konsultasi Odoo</h1>
        <div className="flex flex-wrap justify-center items-center gap-5 py-5 lg:flex-row lg:flex md:grid md:grid-cols-2 scale-85 md:scale-100">
    
  
  {DataAdvance.map((DataAdvance, index) => (
    <div key={index} 
      className={`flex flex-col justify-center items-center py-10 
        ${index >= 4 ? "md:flex-row" : ""} 
  ${index <= 2 ? "xl:border-r-4" : ""} 
  ${index <= 2 ? "md:border-none" : ""}`}   
    >
      <img src={DataAdvance.img} alt=""  className="max-h-[209px]"/>
      <h3 className="font-bold font-inter text-xl pb-5">{DataAdvance.title}</h3>
      
      {/* Kondisi: Jika index genap (0,2,4), maka background gelap */}
      <div
        className={`flex justify-center items-center 
          h-[310px] w-[330px] px-2 `}
      >
        <p className="text-center font-semibold font-inter">{DataAdvance.decription}</p>
      </div>
      <Button> Consultasi Geratis </Button>
    </div>
  ))}
</div>
</div>
    )
}






export default Konsultasi