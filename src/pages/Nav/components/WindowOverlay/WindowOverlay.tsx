import React, { useMemo } from 'react'
import './styles.scss'
interface WindowOverlayProps {
  active: boolean
}

const WindowOverlay: React.FC<WindowOverlayProps> = ({ active }) => {
  const cn = useMemo(() => {
    return `overlay ${active ? 'open' : ''}`
  }, [active])

  return (
    <div className="overlay-wrapper">
      <div className={cn}></div>
      <div className={cn}></div>
      <div className={cn}></div>
    </div>
  )
}

export default WindowOverlay
