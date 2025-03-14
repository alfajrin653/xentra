// Komponen Reusable untuk Feature Card
const Features = ({ img, title }) => {
  return (
    <div className='flex flex-col items-center text-center pb-5'>
      <img src={img} alt={title} className='h-[118px] w-[218px] object-contain' />
      <p className='mt-3 text-sm md:text-base'>{title}</p>
    </div>
  );
};

// Komponen Card yang Bisa Menerima Data dari Luar
const Card = ({ title, features, gridCol = 'grid-cols-2 md:grid-cols-5 gap-5 ' }) => {
  return (
    <div className='text-center pl-5 '>
      <h3 className='text-2xl font-semibold mb-6'>{title}</h3>
      <div className={`grid ${gridCol}`}>
        {features.map((feature, index) => (
          <Features key={index} img={feature.img} title={feature.title} />
        ))}
      </div>
    </div>
  );
};

export default Card;
