import React from 'react'
import { cn } from '../lib/utils'
interface SectionFlatProps {
  children?: React.ReactNode
  className?: string
  sidePattern?: boolean
}
const SectionFlat: React.FC<SectionFlatProps> = ({
  children,
  className,
  sidePattern
}) => {
  const pattern =
    'border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 md:col-start-3 md:block dark:[--pattern-fg:var(--color-white)]/10'
  return (
    <div className={cn('relative flex w-full', className)}>
      <div
        className={cn('bg-background grow border-r', sidePattern && pattern)}
      ></div>
      <div className="mx-auto w-[980px]">{children}</div>
      <div
        className={cn('bg-background grow border-l', sidePattern && pattern)}
      ></div>
    </div>
  )
}

export default SectionFlat
