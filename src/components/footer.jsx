import React from 'react';
import Logo from './logo';

const Footer = () => {
  return (
    <section className='bg-title_color w-full h-auto py-3 mt-32 flex my-auto px-8'>
      <div className='flex justify-between items-center mx-auto w-full'>
        <Logo color="white" />
        <p className='font-font lg:block hidden text-md font-medium text-body_color'>Beautiful website made with my Love</p>
        <span className='flex gap-3 text-2xl items-center text-body_color'>
          <a><ion-icon name="logo-instagram"></ion-icon></a>
          <a><ion-icon name="logo-facebook"></ion-icon></a>
          <a><ion-icon name="logo-github"></ion-icon></a>
        </span>
      </div>
    </section>
  );
}

export default Footer;
