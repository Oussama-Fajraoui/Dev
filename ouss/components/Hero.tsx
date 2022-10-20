import Link from 'next/link';
import React from 'react'
import { useTypewriter,Cursor  } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: ["Hi, My Name is Oussama Fajraoui","Guy Who loves To Code"],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
        src="https://avatars.githubusercontent.com/u/102801929?v=4"
        className='relative rounded-full h-40 w-40 mx-auto object-cover'
        alt="oussama.fajraoui"
        />
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
            Full-Stack JavaScript Developer 
          </h2>
        <h1 className='text-5x1 lg:text-6x1 font-semibold scroll-px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
          <Link href="#about">
          <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
          <button className='heroButton'>Experience</button>
          </Link>
          {/* <Link href="#skills">
          <button className='heroButton'>Skills</button>
          </Link > */}
          <Link href="#projects">
          <button className='heroButton'>Projects</button>
          </Link>
        </div>
        </div>
    </div>
  )
}