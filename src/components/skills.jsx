import React from 'react'

const skills = () => {
    const skil=[
        {
            icon: <ion-icon name="logo-html5"></ion-icon>,
            title:"HTML",
            text:"  Proficient in crafting semantically structured, accessible, and responsive web pages using HTML5, ensuring optimal user experiences across various devices and screen sizes"
            
        },
        {
            icon: <ion-icon name="logo-css3"></ion-icon>,
            title:"CSS",
            text:" Expertise in leveraging CSS3 and advanced styling techniques to create visually appealing and intuitive user interfaces, with a strong emphasis on responsive design "
            
        },
        {
            icon: <ion-icon name="logo-javascript"></ion-icon>,
            title:"JAVASCRIPT",
            text:"  Fluent in JavaScript ES6+ with a deep understanding of core concepts, enabling the development of interactive and dynamic web applications that deliver rich ux."
            
        },
        {
            icon: <ion-icon name="logo-react"></ion-icon>,
            title:"REACT",
            text:"  Adept at building robust, scalable web applications using React, effectively utilizing its component-based architecture and state management for creating seamless, single-page experiences"
            
        },
        {
            icon: <ion-icon name="logo-html5"></ion-icon>,
            title:"TAILWINDCSS",
            text:"Proficient in leveraging the power of Tailwind CSS to rapidly prototype and style web interfaces, utilizing its utility-first approach to create clean, maintainable code"
            
        },
    
        {
            icon: <ion-icon name="logo-github"></ion-icon>,
            title:"GIT & GITHUB",
            text:"Experienced in version control using Git and proficient in leveraging GitHub for collaborative development, ensuring effective code management, version tracking, and seamless team collaboration "
        },
       
    ]
  return (
    <section id='skills' className='lg:mt-44 mt-32 font-custom'>
            <h1 className='text-4xl flex justify-center items-center font-semibold text-title_color'>Skills</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-24 lg:mx-32 mx-12 my-20'>
            {skil.map((service, index) => (
                   <div key={index} className='text-center cursor-pointer '>
                      <span className='text-7xl text-text_color mb-8 '>{service.icon}</span>
                      <h1 className='text-xl font-semibold text-title_color mb-8 '>{service.title}</h1>
                      <p className='text-sm font-medium text-title_color opacity-40 text-center leading-7'>
                       {service.text}
                        </p>
                   </div>
                        ))}
            </div>

    </section>
  )
}

export default skills