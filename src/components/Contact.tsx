import React from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div id ="contact" className='pt-32 container'>
        <div className='grid md:grid-cols-2 container'>
            <div className='space-y-8'>
                <h2 className='text-5xl'>Get in Link with me</h2>
<p className='text-blue-600 text-[18px] pt-2'>
    You can send me a message by submitting the form.
</p>
<div className='flex-gap-3 items-center'>
<MdAlternateEmail size={30}/> alishbarahim66@gmail.com 
</div>
<div className='flex-gap-3 items-center'>
<BsFillTelephoneFill size={30}/> +92 3133613430
</div>


            </div>
            <div className='space-y-8'
            >
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className="h-[40px] bg-transparent border border-blue-600"
                    id="name"/>
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className="h-[40px] bg-transparent border border-blue-600"
                    id="email"/>
                </div>

                <div className='flex flex-col gap-1'>
                    <label htmlFor="message">Message</label>
                  <textarea
                    className=" bg-transparent border border-blue-600"
                    id="message" rows={8}>
                        </textarea> 
                </div>
                <button className='bg-blue-600 p-2 px-6'>send me</button>
            </div>

        </div>
      
    </div>
  )
}

export default Contact
