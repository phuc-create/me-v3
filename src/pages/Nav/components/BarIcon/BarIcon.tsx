import React, { useState } from 'react'
import './styles.scss'

const BarIcon = () => {
  const [active, setActive] = useState(false)
  const handleCloseOpen = () => setActive(pre => !pre)
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
