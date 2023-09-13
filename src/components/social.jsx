import React from 'react'

const social = () => {
  return (
    <div className=' flex justify-center items-center gap-8'>
         <span className='text-3xl text-title_color  '>
            <a><ion-icon name="logo-instagram"></ion-icon></a>
         </span>
         <span className='text-3xl text-title_color  '>
         <a><ion-icon name="logo-facebook"></ion-icon></a>
         </span>
         <span className='text-3xl text-title_color  '>
         <a href='https://github.com/hananiiii'><ion-icon name="logo-github"></ion-icon></a>
         </span>
    </div>
  )
}

export default social