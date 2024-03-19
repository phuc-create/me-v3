import React, { useState } from 'react'
import './styles.scss'
import classNames from 'classnames'
import { BarIcon } from '../../components'

interface HeaderProps {
  active: boolean
  handleCloseOpen: () => void
}

const Header: React.FC<HeaderProps> = ({ active, handleCloseOpen }) => {
  const [title, setTitle] = useState('.Opps...')
  const headercls = classNames('header', { active: active })

  return (
    <header className={headercls}>
      <span
        className="header-title"
        style={{ color: active ? '#ffffff' : '#000000' }}
      >
        {title}
      </span>
      <BarIcon active={active} handleCloseOpen={handleCloseOpen} />
    </header>
  )
}

export default Header
