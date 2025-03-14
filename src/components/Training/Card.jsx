const Card = ({ title, content, variant = "default" }) => {
    const isBordered = variant === "bordered";
  
    return (
      <div
        className={`bg-white text-black p-6 rounded-xl  shadow-lg max-w-2xl lg:max-w-lg 
        ${isBordered ? "border border-gray-300" : ""}`}
      >
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <ul className={`space-y-2 ${isBordered ? "grid md:grid-cols-2 gap-4" : ""}`}>
          {content.map((item, index) => (
            <li
              key={index}
              className={`flex items-center space-x-2 ${isBordered ? "p-4 border border-gray-300 rounded-lg" : ""}`}
            >
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };


  export default Card