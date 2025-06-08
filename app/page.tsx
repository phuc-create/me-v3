import Image from 'next/image'
import SectionFlat from '@v3/components/section-flat'
import Header from '@v3/features/profile/header'
import LongContent from '@v3/features/profile/long-content'
import Overview from '@v3/features/profile/overview'

export default function Home() {
  return (
    <div className="min-h-screen relative items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <div className="bg-background fixed top-0 left-0 z-50 h-2 w-full"></div>
      <SectionFlat
        sidePattern
        className="bg-background fixed top-0 left-0 mt-2 mb-2 border-y z-50"
      >
        <Header />
      </SectionFlat>
      <div className="mt-[50px]"></div>
      {/* <LongContent /> */}
      {/* <SectionFlat> */}
      <HeroBigBG />
      {/* </SectionFlat> */}
      <SectionFlat sidePattern className='border-y'>
        <Overview />
      </SectionFlat>
    </div>
  )
}

const HeroBigBG = () => {
  return (
    <>
      <div className="relative h-[400px] w-full z-0">
        <div className="absolute inset-0">
          <div className="relative h-full w-full bg-black [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [&>div]:bg-[size:14px_14px]">
            <div></div>
          </div>
        </div>

        <div className="relative flex h-full flex-col items-center justify-center px-4">
          <div className="max-w-3xl text-center">
            <h1 className="mb-8 text-4xl font-sans tracking-tight text-white sm:text-6xl lg:text-5xl">
              Hi...
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
