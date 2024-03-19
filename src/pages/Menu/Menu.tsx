import React from 'react'
import './styles.scss'
import { menu } from './constants'
import { Button, WindowOverlay } from '../../components'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

interface MenuProps {
  active: boolean
  handleCloseOpen: () => void
}

const Menu: React.FC<MenuProps> = ({ active, handleCloseOpen }) => {
  const navigate = useNavigate()
  const cls = classNames('menu-wrap', {
    open: active
  })

  const handleNavigatePage = (link: string) => () => {
    navigate(link)
    handleCloseOpen()
  }
  return (
    <>
      <WindowOverlay active={active} />
      <div className={cls} id="menu">
        {menu.map((el, index) => {
          return (
            <Button
              key={index}
              id={`mn-item${index}`}
              data-txt={el.tag}
              to={el.link}
              onClick={handleNavigatePage(el.link)}
            >
              {el.tag}
            </Button>
          )
        })}
      </div>
    </>
  )
}

export default Menu
