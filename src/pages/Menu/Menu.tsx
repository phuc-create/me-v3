import React, { useEffect } from 'react'
import './styles.scss'
import { Button, WindowOverlay } from '../../components'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { menu } from '../../constants'
import { motion } from 'framer-motion'

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
    <div style={{ overflow: 'hidden' }}>
      <WindowOverlay active={active} />
      <div className={cls}>
        <motion.div
          className="menu-inner"
          id="menu"
          variants={{
            enter: () => ({
              x: '-50px',
              y: '-50px',
              opacity: 0
            }),
            center: () => ({
              x: '0px',
              y: '0px',
              opacity: 1
            }),
            exit: () => ({
              x: '-50px',
              y: '-50px',
              opacity: 0
            })
          }}
          initial="enter"
          animate={'center'}
          transition={{
            duration: 0.4,
            type: 'spring',
            stiffness: 200
          }}
        >
          {menu.map((el, index) => {
            return (
              <motion.div
                style={{ width: '100%' }}
                key={index}
                variants={{
                  enter: { x: index % 2 === 0 ? '-200px' : '200px' },
                  center: { x: '0px' },
                  exit: { x: index % 2 === 0 ? '-1000px' : '1000px' }
                }}
                initial="enter"
                animate={active ? 'center' : 'exit'}
                transition={{
                  x: {
                    type: 'spring',
                    duration: 1,
                    stiffness: 300,
                    damping: 30
                  },
                  opacity: { duration: 0.2 }
                }}
              >
                <Button
                  id={`mn-item${index}`}
                  data-txt={el.tag}
                  to={el.link}
                  onClick={handleNavigatePage(el.link)}
                >
                  {el.tag}
                </Button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default Menu
