import React from 'react'
import { cn } from '../../lib/utils'
import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({
  weight: '400',
  subsets: ['latin']
})

const experiences = [
  // {
  //   id: 21,
  //   company: 'Decotaion Dream',
  //   role: 'Fullstack Software Developer',
  //   tasks: [
  //     'Find out optimal solution for better UI/UX based on Figma design.',
  //     'Resolve UI styling issues, component architecture, and apply design pattern into building re-usable component.'
  //   ],
  //   since: '2021 - 2024'
  // },
  // {
  //   id: 3,
  //   company: 'Biz',
  //   role: 'Fullstack Software Developer',
  //   tasks: [
  //     'Find out optimal solution for better UI/UX based on Figma design.',
  //     'Resolve UI styling issues, component architecture, and apply design pattern into building re-usable component.'
  //   ],
  //   since: '2021 - 2024'
  // },
  {
    id: 442,
    company: (
      <div className="flex items-center justify-start">
        <span className="text-blue-700">F</span>
        <span className="text-orange-600">P</span>
        <span className="text-green-500">T</span>&nbsp;Software
      </div>
    ),
    role: 'Senior Front-end Engineer',
    tasks: [
      'Find out optimal solution for better UI/UX based on Figma design.',
      'Resolve UI styling issues, component architecture, and apply design pattern into building re-usable component.',
      'Understand and implement new features into the system based on customer requests.'
    ],
    since: '2024 - present',
    current: true
  },
  {
    id: 333,
    company: (
      <div className="flex">
        <span className="text-red-800">S3</span>&nbsp;Corp
      </div>
    ),
    role: 'Front-end Developer',
    tasks: [
      'Colaborating and developing Casper-UI library.',
      'Analyze and implement interfaces based on sketches on Figma.',
      'Resolve UI styling issues, component architecture, and apply design pattern into building re-usable component.'
    ],
    since: '2021 - 2024'
  }
]

const Experiences = () => {
  return (
    <div className="relative w-full">
      <h2 className="p-4 text-2xl font-bold">Experiences</h2>
      <div className="relative grid grid-cols-1 gap-6 gap-y-8 p-4 md:grid-cols-2 lg:grid-cols-3">
        {/* item */}
        {experiences.map(exp => {
          return (
            <div key={exp.id} className="relative flex gap-3">
              {/* Indicator */}
              <div className="flex h-full w-5 min-w-5 items-start pt-[1px]">
                {/* rhumbus */}
                <div
                  className={cn(
                    'bg-background block h-4 w-4 origin-bottom rotate-45 border',
                    'before:bg-background before:absolute before:top-1/2 before:left-1/2 before:h-2.5 before:w-2.5 before:-translate-1/2 before:border',
                    'after:absolute after:top-1/2 after:left-1/2 after:h-1 after:w-1 after:-translate-1/2 after:border',
                    exp.current
                      ? 'before:border-green-500 after:animate-ping after:bg-green-700'
                      : 'after:border after:border-gray-900 after:bg-gray-600'
                  )}
                ></div>
              </div>
              <div className="flex grow flex-col items-start justify-start gap-1.5">
                <div className="text-white-700 font-mono text-base font-bold">
                  {exp.role}
                </div>
                <span className="font-josefin flex text-sm font-bold underline underline-offset-4">
                  @&nbsp;{exp.company}
                </span>
                <div className="text-foreground font-josefin text-sm italic">
                  {exp.since}
                </div>
                <ul className="list-none space-y-2 border-l pl-2">
                  {exp.tasks?.map(task => (
                    <li
                      key={task}
                      className={cn(
                        'font-josefin font-light text-neutral-300',
                        josefin.className
                      )}
                    >
                      - {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experiences
