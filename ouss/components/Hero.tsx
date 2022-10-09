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
    <div>
        <BackgroundCircles />
        <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>
    </div>
  )
}