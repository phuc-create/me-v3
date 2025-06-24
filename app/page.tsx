import SectionFlat from '@v3/components/section-flat'
import Overview from '@v3/features/profile/overview'
import Placeholder from '@v3/features/profile/placeholder'
import { BgPattern } from '../features/profile/bg-pattern'
import Introduction from '../features/profile/introduction'
import CodeReveal from '../components/code-reveal'
import ChatInterface from '../components/chat-interface'
import Stacks from '../features/profile/stacks'
import Experiences from '../features/profile/experiences'
import Image from 'next/image'
import Projects from '../features/profile/projects'

export default function Home() {
  return (
    <>
      <HeroBigBG />

      <SectionFlat sidePattern className="border-y">
        <Introduction />
      </SectionFlat>

      <Placeholder />
      <SectionFlat sidePattern className="h-4 overflow-hidden border-y">
        <BgPattern className="h-4" />
      </SectionFlat>
      <SectionFlat>
        <span className="px-4 text-2xl font-bold">About me</span>
      </SectionFlat>
      <SectionFlat className="border-y">
        <Overview />
      </SectionFlat>
      <Placeholder />
      <SectionFlat className="mt-2 border-y">
        <ChatInterface />
      </SectionFlat>
      <SectionFlat className="mt-2 border-y">
        <span className="px-4 text-2xl font-bold">Stacks</span>
      </SectionFlat>
      <SectionFlat className="border-b" sidePattern>
        <Stacks />
      </SectionFlat>
      <Placeholder />
      <SectionFlat></SectionFlat>
      <SectionFlat sideBorder={false}>
        <Experiences />
      </SectionFlat>
      <Placeholder className="mb-3" />
      <SectionFlat className="mt-2 border-y">
        <span className="px-4 text-2xl font-bold">Projects</span>
      </SectionFlat>
      <SectionFlat>
        <Projects />
      </SectionFlat>
    </>
  )
}

const HeroBigBG = () => {
  return (
    <>
      <div className="relative z-0 h-[400px] w-full">
        <div className="absolute inset-0">
          <div className="relative h-full w-full bg-white dark:bg-black [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#cccccc_1px,transparent_1px),linear-gradient(to_bottom,#cccccc_1px,transparent_1px)] [&>div]:bg-[size:14px_14px] dark:[&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]">
            <div></div>
          </div>
        </div>

        <div className="relative flex h-full flex-col items-center justify-center px-4">
          <div className="max-w-3xl text-center">
            <Image
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHlwMHE2anU5dG5qeWtmMWsxd2phdWo3NmhveG0zZXd5NXNybGFnYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cJ4v3Vts7hcBAC1iDy/giphy.gif"
              // src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDJxNmRtemd6d2VyMmZpa3YzOWF4OGRrNWQ3dHd6bW9yNXp4a2prOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/zSNGx6vCuoMtkV6GAH/giphy.gif"
              alt="hi im sam"
              width={70}
              height={100}
              className="mx-auto"
            />
            <h1 className="t mb-8 flex flex-col font-sans text-4xl tracking-tight sm:text-6xl lg:text-5xl">
              {/* Hi... */}
              <CodeReveal code="text-4xl font-sans tracking-tight text-white" />
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
