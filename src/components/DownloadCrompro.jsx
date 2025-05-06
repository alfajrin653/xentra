import unduh from '../assets/unduh.png';


const DownloadCompro = () => (
  <a href='https://drive.google.com/uc?export=download&id=1Alvz8iUEipsr_jmhXiqucGTRmsYPd9gr'>
    <button className=' fixed w-[141px] h-[39px] border-2 rounded-lg bottom-5 right-5 bg-primary text-white mr-15 p-3 shadow-lg hover:bg-green-600 transition-all flex items-center justify-center'>
      <img src={unduh} alt='unduh' className='ml-0' />
      <span className='text-[10px] font-inter'>Company profile</span>
    </button>
  </a>
);

export default DownloadCompro