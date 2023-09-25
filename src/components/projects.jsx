import React from 'react';
import Commerce from "../assets/commerce8.png";
import Res from "../assets/res.png";
import Home from "../assets/home1.png";

const projects = () => {
    const prjct=[
        {
            title:"house renting website",
            pic:Home,
            text:"Engineered a robust delivery service website, enabling users to easily place orders.",
            link: "https://prismatic-rolypoly-70bc7c.netlify.app/"

        },
        {
            title:"E-commerce website",
            pic:Commerce,
            text:"E-commerce platform for different products, providing an intuitive shopping experience",
            link: "https://capable-selkie-381670.netlify.app/"

        },
        {
            title:"Restaurant website",
            pic:Res,
            text:"Designed and developed a restaurant website, with detailed specifications",
            link: "https://majestic-faloodeh-95de1e.netlify.app/"
        },
    ]

    return (
        <section id='projects' className='lg:mt-44 mt-32 font-custom'>
            <h1 className='text-4xl flex justify-center items-center font-semibold text-title_color'>Projects</h1>
            <div className="flex justify-center ">
                <div className="grid grid-cols-1 lg:mx-24  my-20 md:grid-cols-1 sm:grid-cols-1 gap-16 lg:grid-cols-3">
                    {prjct.map((pr,index) =>(
                    <div key={index} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/20">
                        <div className="h-96 w-72 lg:w-96 lg:h-[400px] sm:w-96 sm:h-[400px]">
                            <img className="h-full w-full  transition-transform  object-contain duration-500  group-hover:scale-125" src={pr.pic} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-semibold text-xl text-body_color mb-5">{pr.title}</h1>
                            <p className="mb-5 text-lg italic text-body_color opacity-0 transition-opacity duration-300 group-hover:opacity-100">{pr.text}</p>
                            <button className="rounded-full bg-title_color_dark py-2 px-3.5 font-com text-sm capitalize text-body_color shadow shadow-title_color border border-body_color ">
                                <a href={pr.link} target="_blank" rel="noopener noreferrer">See project</a>
                            </button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default projects;
