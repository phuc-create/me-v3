import React, { PropsWithChildren } from 'react'
import { cn } from '../lib/utils'

const CodeReveal = ({
  code,
  className
}: { code: string; className?: string } & PropsWithChildren) => {
  return (
    <div
      className={cn(
        'inline font-mono text-xs/6 leading-4 whitespace-pre text-black/20 dark:text-white/25',
        className
      )}
    >
      {code}
    </div>
  )
}

export default CodeReveal
