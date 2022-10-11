import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        viewport={{
            once: true
        }}
        className='w-32 h-32 rounded-full xl:w-[80px] xl:h-[80px] object-cover object-center'
        src="https://cdn.logojoy.com/wp-content/uploads/2018/08/23112855/82.png"
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4x1 font-light'>Scrum master</h4>
            <p className='font-bold text-2x1 mt-1'>Green-Aura</p>
            <div className='flex space-x-2 my-2'>
                <img 
                className='h-5 w-5 rounded-full'
                src="https://cdn.sanity.io/images/81pocpw8/production/4744a617939146ef25141aaac275800035f1c10a-1052x1052.png?w=320&h=320&fit=clip&auto=format"
                />
                     <img 
                className='h-5 w-5 rounded-full'
                src="https://cdn.sanity.io/images/81pocpw8/production/4744a617939146ef25141aaac275800035f1c10a-1052x1052.png?w=320&h=320&fit=clip&auto=format"
                />
                     <img 
                className='h-5 w-5 rounded-full'
                src="https://cdn.sanity.io/images/81pocpw8/production/4744a617939146ef25141aaac275800035f1c10a-1052x1052.png?w=320&h=320&fit=clip&auto=format"
                />
                {/* Tech used */}
                {/* Tech used */}
                {/* Tech used */}
            </div>
            <p className='uppercase py-5 text-gray-300'> 
            Started ... - Ended ...
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Give task to my team members</li>
                <li>Using React native UI/UX for designing screens</li>
                <li>Solving conflict</li>
                <li>Using FireBase to create requests</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard