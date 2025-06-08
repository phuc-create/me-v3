import React from 'react'
import { cn } from '../../lib/utils'

export const BgPattern = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(' bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:col-start-3 md:block dark:[--pattern-fg:var(--color-white)]/10', className
      )}
    />
  )
}
