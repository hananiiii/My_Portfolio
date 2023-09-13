import React, { useState } from 'react'

const contract = () => {
    
        const [firstName, setFirstName] =useState(""); 
        const [email, setEmail] =useState("");
        const [message, setMessage] =useState("");
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log("First Name:", firstName);
            console.log("Email:", email);
            console.log("Message:", message);
        
            setFirstName("");
            setEmail("");
            setMessage("");
          };
    const cont=[
        {
            icon:<ion-icon name="mail-outline"></ion-icon>,
            title:"E-mail",
            text:"hananefatna63@gmail.com"
        },
        {
            icon:<ion-icon name="call-outline"></ion-icon>,
            title:"Phone number",
            text:"0558420692"
        },
        {
            icon:<ion-icon name="logo-github"></ion-icon>,
            title:"GitHub",
            text:"https://github.com/hananiiii"
        },
    ]
       
   // function removeFocus() {
    //  document.getElementById("focus").blur();
  //}
  return (
    <section id='contact' className='lg:mt-44 mt-32 font-custom'>
    <h1 className='text-4xl flex justify-center items-center font-semibold text-title_color'>Contact me</h1>
       <div className="container flex flex-wrap  items-center justify-center mx-auto mt-20 md:px-32 md:flex-row">
          
               <div  className="mb-14 lg:mb-0 lg:w-1/2 ">
                  <div className='grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-14'>
                  {cont.map((contct,index)=>(
                         <div key={index} className='border rounded-md cursor-pointer w-auto lg:w-[75%] h-auto px-6 py-4 hover:transform hover:-translate-y-1  transition-transform duration-300'>
                            <div className='flex gap-3 items-center'>
                             <span className='text-3xl text-yelow  '>{contct.icon}</span>
                             <h1 className='text-xl font-semibold text-title_color inline-block '>{contct.title}</h1>
                             </div>
                             <p className='text-lg font-medium text-title_color opacity-40 text-start leading-7 pt-3'>{contct.text}</p>
                         </div>
                           ))}
                  </div>


              </div>
            
              <div className="lg:w-1/2  w-full lg:mx-0 sm:mx-0 mx-12 ">
              <form onSubmit={handleSubmit} className='text-title_color flex flex-col gap-4  md:mx-0  ' >
                   
                    <input
                    type="text"
                    placeholder="Your name"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    id='focus'

                    className=" text-base focus:border-title_color flex w-full h-auto py-3  px-4 border rounded-sm "
                    
                    />
                    <input
                    type="text"
                    placeholder="Your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    id='focus'

                    className="focus focus:border-title_color text-base   w-full h-auto py-3  px-4 border rounded-sm "
                    
                    />
              
                    
                    <label for="message" class="leading-7 text-sm text-title_color"
                     onChange={(e) => setMessage(e.target.value)}
                     value={message}
                     
                     >Message</label>
                     <textarea id="message" name="message" class="rounded-sm border focus:border-title_color    text-base outline-none w-full h-[200px] py-3  px-3  leading-6 hover:border-2"></textarea>
                     
                    
                    <button  className="leading-7 bg-yelow  px-3 py-3 rounded-sm text-body_color flex justify-center mx-auto w-full hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer">
                        Send
                    </button>
                   
                 </form>

                </div>
              </div>
    </section>
  )
}

export default contract