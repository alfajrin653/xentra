import React from 'react';

const Button = ({ onClick, className = 'h-[41px] w-[166px] rounded-[10px] border-primary font-semibold', children }) => {
  return (
    <button onClick={onClick} className={` border-2 font-inter  text-primary bg-white  flex items-center justify-center  ${className}`}>
      {children}
    </button>
  );
};

export default Button;
