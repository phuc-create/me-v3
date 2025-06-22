import React from 'react'
import { Badge } from '../../components/ui/badge'
import Image from 'next/image'
import { cn } from '../../lib/utils'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '../../components/ui/tooltip'
const stackslist = [
  {
    name: 'Angular',
    img: '/assets/stacks/Angular.svg',
    bgColor: 'bg-red-600',
    textColor: 'text-white'
  },
  {
    name: 'Bun',
    img: '/assets/stacks/Bun.svg',
    bgColor: 'bg-yellow-300',
    textColor: 'text-black'
  },
  {
    name: 'Docker',
    img: '/assets/stacks/Docker.svg',
    bgColor: 'bg-blue-400',
    textColor: 'text-white'
  },
  {
    name: 'Git',
    img: '/assets/stacks/Git.svg',
    bgColor: 'bg-orange-500',
    textColor: 'text-white'
  },
  {
    name: 'Go',
    img: '/assets/stacks/Go.svg',
    bgColor: 'bg-cyan-500',
    textColor: 'text-white'
  },
  {
    name: 'GraphQL',
    img: '/assets/stacks/GraphQL.svg',
    bgColor: 'bg-pink-500',
    textColor: 'text-white'
  },
  {
    name: 'JavaScript',
    img: '/assets/stacks/JavaScript.svg',
    bgColor: 'bg-yellow-400',
    textColor: 'text-black'
  },
  {
    name: 'Jest',
    img: '/assets/stacks/Jest.svg',
    bgColor: 'bg-rose-400',
    textColor: 'text-white'
  },
  {
    name: 'Material UI',
    img: '/assets/stacks/Material UI.svg',
    bgColor: 'bg-blue-700',
    textColor: 'text-white'
  },
  {
    name: 'Microsoft SQL Server',
    img: '/assets/stacks/Microsoft SQL Server.svg',
    bgColor: 'bg-red-600',
    textColor: 'text-white'
  },
  {
    name: 'Next.js',
    img: '/assets/stacks/Next.js.svg',
    bgColor: 'bg-gray-600',
    textColor: 'text-white'
  },
  {
    name: 'Node.js',
    img: '/assets/stacks/Node.js.svg',
    bgColor: 'bg-green-600',
    textColor: 'text-white'
  },
  {
    name: 'PostgreSQL',
    img: '/assets/stacks/postgresql-icon.svg',
    bgColor: 'bg-blue-800',
    textColor: 'text-white'
  },
  {
    name: 'React',
    img: '/assets/stacks/React.svg',
    bgColor: 'bg-cyan-600',
    textColor: 'text-white'
  },
  {
    name: 'Redux',
    img: '/assets/stacks/Redux.svg',
    bgColor: 'bg-purple-600',
    textColor: 'text-white'
  },
  {
    name: 'Slack',
    img: '/assets/stacks/Slack.svg',
    bgColor: 'bg-purple-700',
    textColor: 'text-white'
  },
  {
    name: 'Storybook',
    img: '/assets/stacks/Storybook.svg',
    bgColor: 'bg-pink-400',
    textColor: 'text-white'
  },
  {
    name: 'Tailwind CSS',
    img: '/assets/stacks/Tailwind CSS.svg',
    bgColor: 'bg-teal-400',
    textColor: 'text-white'
  },
  {
    name: 'TypeScript',
    img: '/assets/stacks/TypeScript.svg',
    bgColor: 'bg-blue-600',
    textColor: 'text-white'
  },
  {
    name: 'Webpack',
    img: '/assets/stacks/Webpack.svg',
    bgColor: 'bg-sky-400',
    textColor: 'text-black'
  },
  {
    name: 'Yarn',
    img: '/assets/stacks/Yarn.svg',
    bgColor: 'bg-blue-400',
    textColor: 'text-white'
  }
]

const Stacks = () => {
  return (
    <div className="relative flex flex-wrap gap-6 p-4">
      {/* <!-- Background Pattern --> */}
      <div className="absolute inset-0">
        <div className="absolute top-0 z-[-2] h-full w-full bg-white bg-[size:10px_10px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#000000_1px)]"></div>
      </div>

      {/* <!-- Hero Content --> */}

      {stackslist.map(tech => (
        <Badge
          key={tech.name}
          variant="secondary"
          className={`${tech.bgColor} z-20 cursor-pointer transition-colors`}
        >
          <Tooltip>
            <TooltipTrigger className="flex items-start gap-1.5 px-3 py-1 text-sm font-bold">
              <Image
                src={tech.img || '/placeholder.svg'}
                alt={`${tech.name} icon`}
                width={16}
                height={16}
                className={cn('', tech.bgColor)}
              />
              <span className={cn('', tech.textColor)}>{tech.name}</span>
            </TooltipTrigger>
            <TooltipContent>{tech.name}</TooltipContent>
          </Tooltip>
        </Badge>
      ))}
    </div>
  )
}

export default Stacks
