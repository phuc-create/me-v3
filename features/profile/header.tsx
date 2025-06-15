import React from 'react'
import { ModeSwitcher } from '../../components/mode-switcher'
interface HeaderProps { }

const links = ['Home', 'Contact', 'About']

const Header = () => {
  return (
    <div className="z-50 flex items-center justify-end gap-4 px-2">
      {links.map(link => {
        return (
          <a
            key={link}
            className="text-foreground hover:text-foreground/80 cursor-pointer text-base font-medium transition-all duration-300"
          >
            {link}
          </a>
        )
      })}
      <ModeSwitcher />
      {/* <a className="text-lg font-semibold">Contact</a>
      <a className="text-lg font-semibold">About</a> */}
    </div>
  )
}

export default Header
