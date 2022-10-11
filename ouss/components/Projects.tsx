import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2x1'>
        Projects
    </h3>
    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 '>
        {projects.map((project, i)=> (
             <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
             <img 
             src="https://oussama-fajraoui.github.io/My-Website/static/media/municipality.20de74679ff5bd483c7f.jpg" 
             alt=""
             className='h-35' 
             />
             <div className='space-y-10 px-0 md:px-10 max-w-6x1'>
                <h4 className='text-4x1 font-semibold text-center'> 
                    <span className='underline decoration-[#F7AB0A]/50'>Case Study {i+1} of {projects.length} : UPS clone</span>
                </h4>
                <p className='text-lg text-center md:text-left'>
                    Dummy text
                </p>
             </div>
         </div>
        ))}
    </div>
    <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>

    </div>
  )
}

export default Projects