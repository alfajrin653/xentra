const CarouselButton = ({ direction, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`absolute top-1/2 transform-translate-y-1/2 ${
          direction === "left" ? "left-2" : "right-2"
        } bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300`}
      >
        {direction === "left" ? "◀" : "▶"}
      </button>
    );
  };
  
  export default CarouselButton;
  