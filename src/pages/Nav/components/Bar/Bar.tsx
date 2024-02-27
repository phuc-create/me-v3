import React, { useState } from 'react'
import './styles.scss'
import { Portal } from '../../../../components'
import BarIcon from '../BarIcon'

const Bar = () => {
  const [title, setTitle] = useState('.Opps...')
  return (
    <Portal container={document.getElementById('root')}>
      <div className="nav-bar">
        <span className="nav-bar-title">{title}</span>
        <BarIcon />
      </div>
    </Portal>
  )
}

export default Bar
