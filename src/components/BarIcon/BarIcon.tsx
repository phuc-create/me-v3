import React from 'react'
import './styles.scss'
import classNames from 'classnames'
interface BarIconProps {
  active: boolean
  handleCloseOpen: () => void
}

const BarIcon: React.FC<BarIconProps> = ({ active, handleCloseOpen }) => {
  const cls = classNames('bar-icon_line', {
    hidden: active
  })

  const close = classNames('bar-icon_close', {
    'active-close': active
  })
  return (
    <div className="bar-icon" onClick={handleCloseOpen}>
      <span className={cls}></span>
      <span className={`${cls} primary`}></span>
      <span className={cls}></span>
      <span className={`${close} one`}></span>
      <span className={`${close} two`}></span>
    </div>
  )
}

export default BarIcon
