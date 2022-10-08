import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <div className='flex flex-row items-center'>
       {/* social icons */}
       <SocialIcon 
       url="https://www.linkedin.com/in/oussama-fajraoui-59436b22b/" 
       fgColor='gray' 
       bgColor='transparent' 
       />
        <SocialIcon 
        url="https://github.com/Oussama-Fajraoui" 
       fgColor='gray' 
       bgColor='transparent' 
       />
        <SocialIcon 
        url="https://www.facebook.com/oussama.fajraouigamer" 
       fgColor='gray' 
       bgColor='transparent' 
       />
        </div>
        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon 
        className='cursor-pointer'
        network='email'
       fgColor='gray' 
       bgColor='transparent' 
       />  
       <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
        Get In Touch
        </p>
        </div>
        </header>
  )
}