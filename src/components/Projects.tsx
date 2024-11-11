import React from 'react'
import Card from './Card';

const data = [
    {
        id:0,
        title:<a href='file:///C:/Users/sanaa/Desktop/Alish%20html/resume.html'>"RESUME"</a>,
        describe: "",
        img:"/cv.PNG",
       tags:[],
    },
    {
        id:1,
         title:<a href="https://github.com/alishba66/simple-calculator">"calculator"</a>,
        describe: "",
        img:"/clu.jpg",
        tags:[],
        
    },
    {
        id:2,
        title:<a href="https://github.com/alishba66/number-guessing-game">"guessing game"</a>,
        describe: "",
        img:"/game.webp",
        tags:[],
        
    },
    
]

const Projects = () => {
    return (
      <div  id='project'className='container pt-32'>
     <h2 className='text 5xl md:text-6xl text-center py-9 text-white font-semibold '>MY PROJECTS</h2>
        <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center  '>
        
        {data.map((el) =>(<Card
        key={el.id}
        title={el.title}
        describe={el.describe}
        img={el.img}
       
      
        />)) }
      </div>
    </div>
  )
}

export default Projects
