import React from 'react'
import './styles.scss'
interface BarIconProps {
  active: boolean
  handleCloseOpen: () => void
}

const BarIcon: React.FC<BarIconProps> = ({ active, handleCloseOpen }) => {
  return (
    <div className="bar-icon" onClick={handleCloseOpen}>
      <span className={`bar-icon_line ${active ? 'hidden' : ''}`}></span>
      <span
        className={`bar-icon_line primary ${active ? 'hidden' : ''}`}
      ></span>
      <span className={`bar-icon_line ${active ? 'hidden' : ''}`}></span>
      <span
        className={`bar-icon_close one ${active ? 'active-close' : ''}`}
      ></span>
      <span
        className={`bar-icon_close two ${active ? 'active-close' : ''}`}
      ></span>
    </div>
  )
}

export default BarIcon
