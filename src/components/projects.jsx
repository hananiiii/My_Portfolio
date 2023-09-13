import React from 'react'

const projects = () => {

    const prjct=[
        {
            title:"Quize website",
            pic:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            text:"Developed an engaging quiz platform offering a variety of quizzes on diverse topics."
        },
        {
            title:"Delivery website",
            pic:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            text:"Engineered a robust delivery service website , enabling users to easily place orders."
        },
        {
            title:"E-commerce website",
            pic:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            text:" e-commerce platform for different products, providing an intuitive shopping experience "
        },
        {
            title:"Cars website",
            pic:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            text:"Designed and developed a cars website,  with detailed specifications"
        },
    ]
  return (
    <section id='projects' className='lg:mt-44 mt-32 font-custom'>
           <h1 className='text-4xl flex justify-center items-center font-semibold text-title_color'>Projects</h1>
           <div class="flex justify-center ">
  <div class="grid grid-cols-1 lg:mx-32 my-20 md:grid-cols-2 sm:grid-cols-2 gap-16 lg:grid-cols-4">
    {prjct.map((pr,index) =>(
    <div key={index} class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={pr.pic} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-semibold  text-xl  text-body_color mb-5">{pr.title}</h1>
        <p class="mb-5 text-lg italic text-body_color opacity-0 transition-opacity duration-300 group-hover:opacity-100">{pr.text}</p>
        <button class="rounded-full bg-title_color_dark py-2 px-3.5 font-com text-sm capitalize text-body_color shadow shadow-title_color border border-body_color ">
            <a>See project</a>
            </button>
      </div>
      
    </div>
    ))}
  </div>
 
</div>

    </section>
  )
}

export default projects