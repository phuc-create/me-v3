import Image from 'next/image'
import React from 'react'
import { BgPattern } from './bg-pattern'
import RotateWords from './rotate-words'
import CodeReveal from '../../components/code-reveal'

const Introduction = () => {
  return (
    <div className="relative flex w-full">
      <Image
        priority
        className="ring-border ring-offset-background bg-background absolute -top-[75px] left-[2px] h-[156px] w-[156px] rounded-full bg-cover object-cover ring-1 ring-offset-2"
        src="/assets/IMG_0192.JPG"
        alt={'nah Bro!'}
        width={200}
        height={200}
      />
      <div className="relative h-[84px] w-[160px]">
        {/* Indicator */}
        <span className="absolute right-5.5 bottom-4 flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
        </span>
      </div>
      {/* Quick introduction */}
      <div className="relative flex grow flex-col justify-start border-l">
        <CodeReveal
          className="absolute -top-6 left-2"
          code="text-3xl font-sans tracking-tight"
        />
        <h1 className="flex grow scroll-m-20 items-center gap-2 border-b pl-2 font-sans text-3xl tracking-tight">
          Nguyen Huu Phuc (Sam)
          <svg
            className="me-2 h-5 w-5 shrink-0 text-green-500 dark:text-green-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        </h1>
        <CodeReveal
          className="border-b pl-2 text-[12px]"
          code="text-foreground font-mono"
        />
        <RotateWords
          className="overflow-hidden pl-2"
          words={[
            'Software Developer',
            'Front-end Developer',
            'Dog Lover',
            'Content Chaser',
            'Introverted'
          ]}
          delay={4000}
        />
      </div>
    </div>
  )
}

export default Introduction
