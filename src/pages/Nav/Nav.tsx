import React from 'react'
import './styles.scss'
import { menu } from './constants'
import { Link } from 'react-router-dom'
import Bar from './components/Bar'
import { Button } from '../../components'

const Nav = () => {
  return (
    <nav className="menu">
      <Bar />
      <div className="menu-wrap" id="menu">
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
