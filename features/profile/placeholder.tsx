import React from 'react'
import { cn } from '../../lib/utils'

const Placeholder = ({
  children,
  className
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'bg-background top-0 left-0 z-50 w-full',
        className,
        children ? '' : 'h-2'
      )}
    >
      <div className="text-2xl font-bold">{children}</div>
    </div>
  )
}

export default Placeholder
