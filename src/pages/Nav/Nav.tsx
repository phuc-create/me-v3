import React, { useState } from 'react'
import './styles.scss'
import { menu } from './constants'
import Bar from './components/Bar'
import { Button } from '../../components'
import WindowOverlay from './components/WindowOverlay'
import classNames from 'classnames'
import { useGSAP } from '@gsap/react'

const Nav = () => {
  const [active, setActive] = useState(false)
  const handleCloseOpen = () => setActive(pre => !pre)
  const cls = classNames('menu-wrap', {
    open: active
  })

  return (
    <nav className="menu">
      <Bar active={active} handleCloseOpen={handleCloseOpen} />
      <WindowOverlay active={active} />
      <div className={cls} id="menu">
        {menu.map((el, index) => {
          return (
            <Button
              key={index}
              id={`mn-item${index}`}
              data-txt={el.tag}
              to={el.link}
              link
            >
              {el.tag}
            </Button>
          )
        })}
      </div>
    </nav>
  )
}

export default Nav
