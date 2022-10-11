import React from 'react'
import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean
}

function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x: directionLeft ? -200: 200,
            opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x:0 }}
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
        className='rounded-full border border-gray-500 object-cover w-23 h-23 xl:w-12 xl:h-12 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-12 xl:h-12 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-3x1 font-bold text-black opacity-100'>100%</p>
          </div>
      </div>
    </div>
    
  )
}

export default Skill