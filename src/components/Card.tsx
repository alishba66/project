import React from 'react'
import Image from 'next/image'


interface propsTypes{
    title:string,
    describe:string,
    img:string,
  
   
   
}
const Card:React.FC<propsTypes> = ({title,describe,img}) => {
  return (
    <div className='border-4 border-blue-900 w-[300px] sm:w-[350px]  "data-aos="zoom-in-up '>
     
      <div>
        <Image  className='w-[200px] sm:w-[350px] h-auto'
        src={img}
        width={350}
        height={350}
        alt={title}
        />
      
      </div>
      
<div className='p-4 space-y-4'>
  <div className='text-3xl font-[200px]   '>{title}
 
     
  </div>
  
  <div>{describe}</div>

 

</div>
</div>

  )
}

export default Card
