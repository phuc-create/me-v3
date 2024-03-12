import React, { useState } from 'react'
import './styles.scss'
import { Portal } from '../../../../components'
import BarIcon from '../BarIcon'
interface BarProps {
  active: boolean
  handleCloseOpen: () => void
}

const Bar: React.FC<BarProps> = ({ active, handleCloseOpen }) => {
  const [title, setTitle] = useState('.Opps...')

  return (
    <>
      {/* <Portal> */}
      <div className="nav-bar">
        <span
          className="nav-bar-title"
          style={{ color: active ? '#ffffff' : '#000000' }}
        >
          {title}
        </span>
        <BarIcon active={active} handleCloseOpen={handleCloseOpen} />
      </div>
      {/* </Portal> */}
      {/* <WindowOverlay /> */}
      {/* <div></div>
      <div></div>
      <div></div> */}
    </>
  )
}

export default Bar
