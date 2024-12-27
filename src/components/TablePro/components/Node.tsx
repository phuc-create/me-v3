import React from 'react'

interface NodeProps {
  className?: string
  children: React.ReactNode
}

export const Node: React.FC<NodeProps> = ({ className, children }) => {
  return <div className="flex justify-between items-center">{children}</div>
}

export default Node
