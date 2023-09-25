import React from 'react';
import './button.css'; 

const Button = () => {
  return (
    <div className='flex mx-auto lg:flex-row sm:flex-row  flex-col md:gap-16 gap-8 justify-center text-semibold text-title_color text-lg font-custom'>
      <button className='rounded-lg border-2 md:w-[250px] sm:w-[250px] w-[180px] lg:px-5 sm:px-5  px-3 py-4 border-yelow fancy-button  hover:duration-300 hover:shadow-sm  hover:transform hover:-translate-y-1  transition-transform duration-300 '>
        Downloads cv
      </button>
      <button className='rounded-lg border-2 md:w-[250px] sm:w-[250px] w-[180px] lg:px-5 sm:px-5  px-3 py-4 border-yelow fancy-button  hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer'>
        Say hello
      </button>
    </div>
  );
};

export default Button;
