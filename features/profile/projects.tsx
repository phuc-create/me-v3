'use client'
import React from 'react'
import CodeReveal from '../../components/code-reveal'
import Image from 'next/image'
import { Button } from '../../components/ui/button'
import { cn } from '../../lib/utils'
import { ExternalLink } from 'lucide-react'
import { Badge } from '../../components/ui/badge'

const projects = [
  {
    id: 999,
    name: 'Solve it! (Javascript Problem Practice - Leetcode base)',
    description:
      ' A clone platform that offers the opportunity to practice Javascript problems based on Leetcode. Enhance the proficiency in Javascript coding and problem-solving skills.',
    since: 2024,
    previewImg: '/assets/solveit.png',
    link: 'Suppabase crashed (TBU...)',
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
    link: 'https://mm-g.vercel.app',
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
    link: 'https://find-v2.vercel.app/',
    linkOke: true,
    stacks: ['ReactJS', 'Typescript']
  },
  {
    id: 123,
    name: 'Anime collections',
    description:
      ' Browser collection of anime art, an e-commerce shopping website that I created in 2021 because of big inspiration from anime movies, recently I had some upgrades to use the latest technologies and enhance some functionalities.',
    since: 2021,
    previewImg: '/assets/banner-shop.png',
    link: 'https://shop-app-cyan.vercel.app/',
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
    link: 'https://phuc-create.github.io/covid-19/',
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
  <article className="relative flex flex-col gap-2 p-2">
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
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">{project.name} </h1>
      <span className="text-foreground text-sm font-light">
        (since {project.since})
      </span>
    </div>
    <span className="">{project.description}</span>
    <div className="flex flex-wrap gap-2">
      {project.stacks.map(stack => (
        <Badge key={stack} variant="secondary">
          {stack}
        </Badge>
      ))}
    </div>
    {project.linkOke ? (
      <Button
        variant="link"
        className="flex items-start justify-center text-left"
      >
        Link: {project.link}
        <ExternalLink className="h-2 w-2" />
      </Button>
    ) : (
      <span className="text-center text-sm text-red-600 italic">
        Link Unavailable now...
      </span>
    )}
    <Button>View</Button>
  </article>
)
