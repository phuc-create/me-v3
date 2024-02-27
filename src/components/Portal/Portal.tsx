import React from 'react'
import ReactDom from 'react-dom'
interface PrimitivePortalProps {
  children?: React.ReactNode
  container?: HTMLElement | null
}
const Portal: React.FC<PrimitivePortalProps> = ({
  children,
  container = globalThis.document.body
}) => {
  return container ? ReactDom.createPortal(children, container) : null
}

export default Portal
