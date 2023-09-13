import React from 'react'
import Logo from './logo'
const footer = () => {
  return (
    <section className='bg-title_color w-full h-auto py-3 mt-32 flex items-center text-center my-auto justify-between px-8'>
         <Logo color="white"/>
         <p className='font-costum lg:block hidden text-sm text-center text-body_color'>Beautiful website made with my Love</p>
         <span className='flex gap-3 text-2xl text-body_color '>
            <a><ion-icon name="logo-instagram"></ion-icon></a>
         <a><ion-icon name="logo-facebook"></ion-icon></a>
         <a><ion-icon name="logo-github"></ion-icon></a>
         </span>
    </section>
  )
}

export default footer