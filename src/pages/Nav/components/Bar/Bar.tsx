import React, { useState } from 'react'
import BarIcon from './components/BarIcon'
import './styles.scss'

interface BarProps {
  active: boolean
  handleCloseOpen: () => void
}

const Bar: React.FC<BarProps> = ({ active, handleCloseOpen }) => {
  const [title, setTitle] = useState('.Opps...')

  return (
    <>
      <div className="nav-bar">
        <span
          className="nav-bar-title"
          style={{ color: active ? '#ffffff' : '#000000' }}
        >
          {title}
        </span>
        <BarIcon active={active} handleCloseOpen={handleCloseOpen} />
      </div>
    </>
  )
}

export default Bar
