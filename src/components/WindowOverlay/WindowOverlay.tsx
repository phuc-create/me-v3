import React, { useMemo } from 'react'
import './styles.scss'
import classNames from 'classnames'
interface WindowOverlayProps {
  active: boolean
}

const WindowOverlay: React.FC<WindowOverlayProps> = ({ active }) => {
  const overlay = classNames('overlay-wrapper', {
    active: active
  })
  const cn = useMemo(() => {
    return `overlay ${active ? 'open' : ''}`
  }, [active])
  console.log("test interactive")
  console.log("test interactive but this is the second commits")
  console.log("already to test interactive")
  return (
    <div className={overlay}>
      <div className={cn}></div>
      <div className={cn}></div>
      <div className={cn}></div>
    </div>
  )
}

export default WindowOverlay
