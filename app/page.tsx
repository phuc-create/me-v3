import Image from 'next/image'
import SectionFlat from '@v3/components/section-flat'
import Header from '@v3/features/profile/header'
import LongContent from '@v3/features/profile/long-content'
import Overview from '@v3/features/profile/overview'
import Placeholder from '@v3/features/profile/placeholder'
import { BgPattern } from '../features/profile/bg-pattern'
import Introduction from '../features/profile/introduction'
import CodeReveal from '../components/code-reveal'

export default function Home() {
  return (
    <div className="relative min-h-screen items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <Placeholder className="fixed"></Placeholder>

      <SectionFlat
        sidePattern
        className="bg-background fixed top-0 left-0 z-50 mt-2 mb-2 border-y"
      >
        <CodeReveal
          className="flex w-full justify-end border-b px-2"
          code="text-foreground font-mono text-sm font-medium"
        />
        <Header />
      </SectionFlat>
      <div className="mt-[50px]"></div>

      <HeroBigBG />

      <SectionFlat sidePattern className="border-y">
        <Introduction />
      </SectionFlat>

      <Placeholder />

      <SectionFlat sidePattern className="h-4 overflow-hidden border-y">
        <BgPattern className="h-4" />
      </SectionFlat>

      <SectionFlat className="mt-2 border-y">
        <Overview />
      </SectionFlat>
      {/* <SectionFlat sidePattern className="mt-2 border-y"> */}
      {/* <LongContent /> */}
      {/* </SectionFlat> */}
    </div>
  )
}

const HeroBigBG = () => {
  return (
    <>
      <div className="relative z-0 h-[400px] w-full">
        <div className="absolute inset-0">
          <div className="relative h-full w-full bg-black [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [&>div]:bg-[size:14px_14px]">
            <div></div>
          </div>
        </div>

        <div className="relative flex h-full flex-col items-center justify-center px-4">
          <div className="max-w-3xl text-center">
            <h1 className="mb-8 flex flex-col font-sans text-4xl tracking-tight text-white sm:text-6xl lg:text-5xl">
              Hi...
              <CodeReveal code="text-4xl font-sans tracking-tight text-white" />
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
