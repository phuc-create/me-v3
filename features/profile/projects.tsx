import React from 'react'
import CodeReveal from '../../components/code-reveal'

const Projects = () => {
  const mocks = [1, 2, 3]
  return (
    <div className="relative flex w-full flex-col">
      <CodeReveal
        code="font-light italic text-sm"
        className="border-y px-4 text-[12px]"
      />
      <span className="px-4 text-sm font-light italic">
        Note: These projects since 2021
      </span>
      {/* board of projects */}
      <section className="relative grid grid-cols-1 gap-6 gap-y-8 p-4 md:grid-cols-2">
        {mocks.map(i => {
          return <article key={i}>hi</article>
        })}
      </section>
    </div>
  )
}

export default Projects
