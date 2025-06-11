import React from 'react'
import CodeReveal from '../../components/code-reveal'

const Overview = () => {
  return (
    <div className="relative flex w-full flex-col">
      <CodeReveal
        code="font-mono text-sm text-white"
        className="border-b px-4"
      />
      <h2 className="mb-2 px-4 py-1 font-mono text-sm text-gray-900 dark:text-white">
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
    </div>
  )
}

export default Overview
