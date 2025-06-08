import Image from 'next/image'
import React from 'react'
import { BgPattern } from './bg-pattern'
import RotateWords from './rotate-words'

const Overview = () => {
  return (
    <div className='flex w-full relative'>
      <Image className='absolute -top-[75px] rounded-full w-[160px] h-[160px] bg-cover object-cover border p-1 bg-background' src="/assets/IMG_0192.JPG" alt={"nah Bro!"} width={200} height={200} />
      <div className='w-[160px] h-[84px] relative'>
        {/* Indicator */}
        <span className="absolute flex size-3 right-5.5 bottom-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
        </span>
      </div>
      {/* Quick introduction */}
      <div className='flex flex-col justify-start grow border-l'>
        <h1 className='h-1/2 pl-2 scroll-m-20 text-3xl font-sans tracking-tight text-balance border-b items-center flex'>
          Nguyen Huu Phuc
        </h1>
        <div className='flex justify-start pl-2 items-center h-1/2 text-foreground font-mono leading-none'>
          <RotateWords
            words={["Software Developer", "Front-end Developer", "Dog Lover", "Content Chaser", "Introverted"]} delay={4000} />
        </div>
      </div>
    </div>
  )
}

export default Overview
