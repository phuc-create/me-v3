import Image from 'next/image'
import React from 'react'
import { BgPattern } from './bg-pattern'
import RotateWords from './rotate-words'
import CodeReveal from '../../components/code-reveal'
import { Home, Locate, LocationEdit } from 'lucide-react'

const Overview = () => {
  return (
    <div className="relative flex w-full flex-col">
      <CodeReveal
        code="text-lg text-white font-medium"
        className="border-b px-4"
      />
      <h2 className="mb-2 px-4 py-1 font-medium text-gray-900 dark:text-white">
        Hi, I'm Sam, a friendly neighborhood, I've been working with pixels for
        several years.
        <br />
        Passionate about building innovative, functional web applications, and
        exploring web development technologies.
        <br />
      </h2>
      <CodeReveal
        code="font-light italic text-sm"
        className="border-y px-4 text-[12px]"
      />
      <span className="px-4 text-sm font-light italic">
        Enoughh JavaScript to make your toaster dance...!
      </span>
      {/* <ul className="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
        <li className="flex items-center gap-2 justify-start font-mono text-sm">
          <LocationEdit className="w-6 h-6 p-1 size-4 text-muted-foreground rounded-lg bg-muted" />
          Ho Chi Minh City
        </li>
        <li className="flex items-center gap-2 justify-start font-mono text-sm">
          <LocationEdit className="w-6 h-6 p-1 size-4 text-muted-foreground rounded-lg bg-muted" />
          Ho Chi Minh City
        </li>
        <li className="flex items-center gap-2 justify-start font-mono text-sm">
          <LocationEdit className="w-6 h-6 p-1 size-4 text-muted-foreground rounded-lg bg-muted" />
          Ho Chi Minh City
        </li>
        <li className="flex items-center gap-2 justify-start font-mono text-sm">
          <LocationEdit className="w-6 h-6 p-1 size-4 text-muted-foreground rounded-lg bg-muted" />
          Ho Chi Minh City
        </li>
        <li className="flex items-center gap-2 justify-start font-mono text-sm">
          <LocationEdit className="w-6 h-6 p-1 size-4 text-muted-foreground rounded-lg bg-muted" />
          Ho Chi Minh City
        </li>


      </ul> */}
    </div>
  )
}

export default Overview
