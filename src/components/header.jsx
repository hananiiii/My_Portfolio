import React from 'react'
import Logo from './logo'
import Nav from './nav'
const header = () => {
  return (
<header className=" bg-body_color flex-wrap sticky top-0 z-[20] mx-auto flex   w-full  items-center  justify-between  p-8">
         <Logo color="black"/>
         <Nav/>
    </header>
  )
}

export default header