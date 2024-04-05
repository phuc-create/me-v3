import React, { useLayoutEffect, useMemo, useState } from 'react'
import './styles.scss'
import classNames from 'classnames'
import { BarIcon } from '../../components'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useLocation } from 'react-router-dom'
import { menu } from '../../constants'

interface HeaderProps {
  active: boolean
  handleCloseOpen: () => void
}

const Header: React.FC<HeaderProps> = ({ active, handleCloseOpen }) => {
  const locations = useLocation()
  console.log(locations)
  const [title, setTitle] = useState('.Opps...')
  const headercls = classNames('header', { active: active })

  const titleSplited = useMemo(() => {
    const titleFound = menu.find(
      m => m.link === locations.pathname.replace('/', '')
    )
    return titleFound?.tag
  }, [title, locations])
  // useLayoutEffect(() => {
  //   // a gsap.context() lets us use scoped selector text and makes cleanup way easier. See https://greensock.com/docs/v3/GSAP/gsap.context()
  //   const ctx = gsap.context(() => {
  //     const split = new SplitText('.header-title', { type: 'chars' })

  //     gsap.from(split.chars, {
  //       // <- selector text, scoped to this component!
  //       opacity: 0,
  //       y: 100,
  //       ease: 'back',
  //       duration: 1,
  //       stagger: 0.1
  //     })

  //     return () => split.revert() // context cleanup
  //   }, headercls) // <- scopes all selector text inside the context to this component (optional, default is document)

  //   return () => ctx.revert() // useLayoutEffect cleanup
  // }, [])
  return (
    <header className={headercls}>
      <span
        className="header-title __txt-main"
        data-txt={titleSplited}
        style={{ color: active ? '#ffffff' : '#000000' }}
      >
        {titleSplited}
      </span>
      <BarIcon active={active} handleCloseOpen={handleCloseOpen} />
    </header>
  )
}

export default Header
