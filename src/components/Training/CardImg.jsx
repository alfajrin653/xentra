import TrainingImage from '../../assets/Training.png';

const CardImg = ({ Label , Button}) => {

  const phoneNumber = '6287764444343'; // Ganti dengan nomor WhatsApp yang diinginkan
  const message = 'Halo, saya tertarik dengan layanan Odoo Training!';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Fungsi untuk membuka link WhatsApp
  const handleClick = () => {
    window.open(whatsappLink, '_blank'); // Membuka link di tab baru
  }
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
      <button onClick={handleClick} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold font-inter px-6 py-2 rounded-xl hover:bg-gray-800 transition">
        {Button}
      </button>
    </div>
    </div>
    );
  };

  
  
  export default CardImg;  