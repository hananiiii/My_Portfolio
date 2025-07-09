import React from 'react'
import './about.css'
const about = () => {
  return (
    <section id='about' className=' lg:mt-44 mt-32 font-custom'>
       
       <h1 className='text-4xl flex justify-center items-center font-semibold text-title_color'>About me</h1>
        
        <div className="container flex flex-wrap  items-center justify-center mx-auto mt-20 md:px-32 md:flex-row">
               <div className="mb-14 lg:mb-0 lg:w-1/2 ">
                  <div className='image  '></div>
                </div>
                <div className="lg:w-1/2  flex flex-col gap-12  md:mx-0 mx-8  ">
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-8 '>
                           <div className='border  border-md rounded-md  px-8 py-8 text-center cursor-pointer hover:transform hover:-translate-y-1  transition-transform duration-300'>
                           <span className='text-3xl text-yelow inline-block'><ion-icon name="calendar-outline"></ion-icon></span>
                            <h2 className='text-lg font-semibold text-title_color'>Experience</h2> 
                            <p className='text-sm font-medium text-title_color   text-center leading-7'>4 Years</p>
                           </div>
                           <div className='border border-md rounded-md  px-8 py-8 text-center cursor-pointer hover:transform hover:-translate-y-1  transition-transform duration-300'>
                           <span className='text-3xl text-yelow inline-block'><ion-icon name="podium-outline"></ion-icon></span>
                            <h2 className='text-lg font-semibold text-title_color'>Projects</h2> 
                            <p className='text-sm font-medium text-title_color   text-center leading-7'>+10 projects</p>
                           </div>
                           <div className='border border-md rounded-md  px-8 py-8 text-center cursor-pointer hover:transform hover:-translate-y-1  transition-transform duration-300'>
                           <span className='text-3xl text-yelow inline-block'><ion-icon name="alarm-outline"></ion-icon></span>
                            <h2 className='text-lg font-semibold text-title_color'>Avaible</h2> 
                            <p className='text-sm font-medium text-title_color   text-center leading-7'>24h/7</p>
                           </div>
                    </div>
<p className='text-sm font-light text-title_color lg:text-start text-center leading-7'>
  I’m a dedicated full-stack developer and Korean language educator, passionate about crafting scalable, user-focused solutions using microservices architecture. Proficient in programming languages, and event-driven systems like Kafka and Axon Framework, I lead innovative projects while fostering engaging learning environments through strong communication and cultural exchange.
</p>

                </div>
        </div>
    </section>
  )
}

export default about