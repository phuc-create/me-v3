import React from 'react'
import { cn } from '../../lib/utils'

const Placeholder = ({ className }: { className: string }) => {
  return (
    <div className={cn("bg-background top-0 left-0 z-50 h-2 w-full", className)}></div>
  )
}

export default Placeholder
