import React from 'react'

const Logo = ({ color }) => {
  const textColor = color === 'white' ? 'text-body_color' : 'text-title_color';
  return (
    <div className={`flex gap-2 text-3xl font-medium cursor-pointer ${textColor}`}>
      <span className='text-3xl'><ion-icon name="code-slash-outline"></ion-icon></span>
      <h1 className={`text-2xl ${textColor}`}></h1>
    </div>
  )
}

export default Logo;
