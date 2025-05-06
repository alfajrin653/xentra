const CarouselItem = ({ img }) => {
    return (
      <div className="flex items-center justify-center p-2 ">
        <img src={img} alt="Client Logo" className="w-30 h-30 object-contain" />
      </div>
    );
  };
  
  export default CarouselItem;
  