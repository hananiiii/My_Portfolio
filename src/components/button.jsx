import React from 'react';
import './button.css'; 

const Button = () => {
  return (
    <div className='flex md:gap-16 gap-8 justify-center text-seibold text-title_color text-lg font-custom'>
      <button className='rounded-lg border-2 md:w-[250px] sm:w-[250px] w-[200px] px-5 py-4 border-yelow fancy-button  hover:duration-300 hover:shadow-sm  hover:transform hover:-translate-y-1  transition-transform duration-300 '>
        Downloads cv
      </button>
      <button className='rounded-lg border-2 md:w-[250px] sm:w-[250px] w-[200px] px-5 py-4 border-yelow fancy-button  hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer'>
        Say hello
      </button>
    </div>
  );
};

export default Button;
