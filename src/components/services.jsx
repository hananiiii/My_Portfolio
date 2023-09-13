import React from 'react';

const services = () => {
    const serv=[
        {
            icon: <ion-icon name="logo-web-component"></ion-icon>,
            title:"website frontend",
            text:"I will hire a professional frontend service to ensure an engaging and user-friendly experience for visitors to my website"
        },
        {
            icon:<ion-icon name="expand-outline"></ion-icon>,
            title:"Responsive design",
            text:"I will prioritize responsive design to ensure my website looks and functions seamlessly on all devices, providing the best user experience for every visitor."
        },
        {
            icon:<ion-icon name="code-working-outline"></ion-icon>,
            title:"Clean code",
            text:"I am committed to writing clean code for my project, focusing on clarity and maintainability to ensure its long-term success."
        },
    ];

    return (
        <section id='services' className='lg:mt-44 mt-32 font-custom'>
            <h1 className='text-4xl flex justify-center items-center font-semibold text-title_color'>Services</h1>

            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 lg:mx-24 mx-12 my-20'>
                {serv.map((service, index) => (
                    <div key={index} className='cursor-pointer w-full h-auto px-6 py-8 border rounded-md text-center hover:transform hover:-translate-y-1  transition-transform duration-300'>
                        <span className='text-3xl text-yelow inline-block'>{service.icon}</span>
                        <h1 className='text-xl font-semibold text-title_color mb-8'>{service.title}</h1>
                        <p className='text-sm font-medium text-title_color opacity-40 text-center leading-7'>{service.text}</p>
                    </div>
                ))}
            </div>    
        </section>
    );
};

export default services;
