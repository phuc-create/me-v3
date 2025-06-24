'use client'
import React from 'react'
import CodeReveal from '../../components/code-reveal'
import Image from 'next/image'
import { Button } from '../../components/ui/button'
import { ExternalLink } from 'lucide-react'
import { Badge } from '../../components/ui/badge'
import Link from 'next/link'

type ProjectItem = {
  id: number
  name: string
  description: string
  since: number
  previewImg: string
  assets?: {
    source: keyof typeof keyToIcon
    link: string
  }[]
  linkOke: boolean
  stacks: string[]
  link?: undefined
}

const keyToIcon = {
  Github: (
    <svg
      className="h-3 w-3"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  Link: <ExternalLink className="h-3 w-3" />
}

const projects: ProjectItem[] = [
  {
    id: 999,
    name: 'Solve it! (Javascript Problem Practice - Leetcode base)',
    description:
      ' A clone platform that offers the opportunity to practice Javascript problems based on Leetcode. Enhance the proficiency in Javascript coding and problem-solving skills.',
    since: 2024,
    previewImg: '/assets/solveit.png',
    assets: [
      {
        source: 'Github',
        link: 'https://github.com/phuc-create/code-competive'
      },
      {
        source: 'Link',
        link: 'Suppabase crashed (TBU...)'
      }
    ],
    // link: 'Suppabase crashed (TBU...)',
    linkOke: false,
    stacks: [
      'NextJS',
      'Supabase',
      'Shadcn UI',
      'Tailwind CSS',
      'PostgreSQL',
      'Google Cloud Platform (GCP)',
      'Monaco Editor',
      'Firebase',
      'Vecel',
      'Bun'
    ]
  },
  {
    id: 910,
    name: 'Memory Game (Game)',
    description:
      ' In early 2024, this game was created, and it was a gift for my nephew and niece, to be able to increase memory and improve intuition, as well as sharpness.',
    since: 2024,
    previewImg: '/assets/mm.png',
    // link: 'https://mm-g.vercel.app',
    assets: [
      {
        source: 'Github',
        link: 'https://github.com/phuc-create/memory-game'
      },
      {
        source: 'Link',
        link: 'https://mm-g.vercel.app'
      }
    ],
    linkOke: true,
    stacks: ['NextJS', 'Typescript', 'Zustand']
  },
  {
    id: 789,
    name: 'Find it (Game)',
    description:
      ' It is a fun game with the ability to improve critical thinking based on hints. This game was created based on a quiz on social networks, and I remade it to consolidate my knowledge.',
    since: 2022,
    previewImg: '/assets/find.png',
    assets: [
      {
        source: 'Github',
        link: 'https://github.com/phuc-create/find'
      },
      {
        source: 'Link',
        link: 'https://find-v2.vercel.app/'
      }
    ],
    // link: 'https://find-v2.vercel.app/',
    linkOke: true,
    stacks: ['ReactJS']
  },
  {
    id: 123,
    name: 'Anime collections',
    description:
      ' Browser collection of anime art, an e-commerce shopping website that I created in 2021 because of big inspiration from anime movies, recently I had some upgrades to use the latest technologies and enhance some functionalities.',
    since: 2021,
    previewImg: '/assets/banner-shop.png',
    assets: [
      {
        source: 'Github',
        link: 'https://github.com/phuc-create/shop-app'
      },
      {
        source: 'Link',
        link: 'https://shop-app-cyan.vercel.app/'
      }
    ],
    linkOke: true,
    stacks: [
      'ReactJS',
      'Typescript (Refactored)',
      'PureCSS',
      'Redux Toolkit',
      'NodeJS',
      'ExpressJS',
      'MongoDB',
      'Render Server'
    ]
  },
  {
    id: 456,
    name: 'Covid 19 Landing Page',
    description:
      ' The project represents my vision for safeguarding ourselves, and I am excited to share it with others looking for ways to stay safe and healthy.',
    since: 2019,
    previewImg: '/assets/covid.png',
    // link: 'https://phuc-create.github.io/covid-19/',
    assets: [
      {
        source: 'Github',
        link: 'https://github.com/phuc-create/covid-19'
      },
      {
        source: 'Link',
        link: 'https://phuc-create.github.io/covid-19/'
      }
    ],
    linkOke: true,
    stacks: ['HTML', 'PureCSS', 'GSAP', 'BootStrap']
  }
]
const Projects = () => {
  return (
    <div className="relative flex w-full flex-col">
      <CodeReveal
        code="font-light italic text-sm"
        className="border-b px-4 text-[12px]"
      />
      <span className="border-b px-4 text-sm font-light italic">
        Note: These projects made very long time ago, enjoys. (link may not
        available.)
      </span>
      {/* board of projects */}
      <section className="relative grid grid-cols-1 gap-6 gap-y-8 p-4 md:grid-cols-2">
        {projects.map((project, i) => {
          return (
            <Container key={i}>
              <CardBody project={project} />
            </Container>
          )
        })}
      </section>
    </div>
  )
}

export default Projects

const Ellipses = () => {
  const sharedClasses =
    'rounded-full outline outline-8 dark:outline-gray-950 size-1 my-4 outline-gray-50 bg-green-400'
  return (
    <div className="absolute z-0 grid h-full w-full items-center gap-8 lg:grid-cols-2">
      <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
        <div className={`${sharedClasses} -mx-[2.5px]`}></div>
        <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
        <div className={`${sharedClasses} -mx-[2.5px]`}></div>
        <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
      </section>
    </div>
  )
}
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto w-full rounded-lg border border-dashed border-zinc-300 px-4 dark:border-zinc-800">
    <div className="absolute top-4 left-0 -z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700"></div>
    <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700"></div>
    <div className="relative h-full w-full border-x border-zinc-400 dark:border-zinc-700">
      <Ellipses />
      <div className="relative z-20 mx-auto py-4">{children}</div>
    </div>
  </div>
)

const CardBody = ({
  project,
  className = 'p-4'
}: {
  project: (typeof projects)[0]
  className?: string
}) => (
  <article className="relative flex flex-col gap-2">
    <div className="w-full overflow-hidden rounded-sm p-2">
      <div className="relative h-[230px] w-full overflow-hidden rounded-sm">
        <Image
          src={project.previewImg || ''}
          // width={'100%'}
          alt="idk"
          layout="fill"
          objectFit="cover"
          className="!relative transition duration-300 ease-in hover:scale-105"
          sizes="100%"
        />
      </div>
    </div>
    <div className="flex flex-col">
      <div className="flex flex-col text-2xl font-bold">
        <h1 className="px-2 text-2xl font-bold">{project.name}</h1>
        <CodeReveal code="text-2xl font-bold ^-^" className="border-y px-2" />
      </div>

      <span className="text-foreground px-2 py-1 text-sm font-light">
        (since {project.since})
      </span>
    </div>
    <span className="px-2">{project.description}</span>
    <CodeReveal
      code="text-normal font-semibold nice ^-^"
      className="border-y px-2"
    />
    <div className="flex flex-wrap gap-2 px-2 text-sm">
      Stacks:
      {project.stacks.map(stack => (
        <Badge key={stack} variant="secondary">
          {stack}
        </Badge>
      ))}
    </div>
    <div className="text- flex gap-2 px-2 text-sm">
      Resouces:
      {project.assets?.map(src => (
        <Badge key={src.link} className="cursor-pointer">
          <Link
            href={src.link}
            className="flex items-start justify-center gap-1.5"
          >
            {src.source}
            {keyToIcon[src.source]}
          </Link>
        </Badge>
      ))}
    </div>
    <Button className="m-2">View (Still in development...Pls wait)</Button>
  </article>
)
