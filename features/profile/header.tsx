import React from 'react'
import { ModeSwitcher } from '../../components/mode-switcher'
import Link from 'next/link'
interface HeaderProps { }

const links = [
  { link: '/', label: 'Home' },
  { link: '/contact', label: 'Contact' },
  { link: '/about', label: 'About' },
  { link: '/story', label: 'Story' }
]

const Header = () => {
  return (
    <div className="z-50 flex items-center justify-end gap-4 px-2">
      {links.map(link => {
        return (
          <Link
            href={link.link}
            key={link.label}
            className="text-foreground hover:text-foreground/80 cursor-pointer text-base font-medium capitalize transition-all duration-300"
          >
            {link.label}
          </Link>
        )
      })}
      <ModeSwitcher />
      {/* <a className="text-lg font-semibold">Contact</a>
      <a className="text-lg font-semibold">About</a> */}
    </div>
  )
}

export default Header
