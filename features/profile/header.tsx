'use client'
import React from 'react'
import { ModeSwitcher } from '../../components/mode-switcher'
import Link from 'next/link'
import { toast } from 'sonner'
interface HeaderProps { }

const links = [
  { link: '/', label: 'Home', available: true },
  { link: '/contact', label: 'Contact', available: false },
  { link: '/about', label: 'About', available: false },
  { link: '/story', label: 'Story', available: false }
]

const Header = () => {
  return (
    <div className="z-50 flex items-center justify-end gap-4 px-2">
      {links.map(link => {
        if (link.available) {
          return (
            <Link
              href={link.link}
              key={link.label}
              className="text-foreground hover:text-foreground/80 cursor-pointer text-base font-medium capitalize transition-all duration-300"
            >
              {link.label}
            </Link>
          )
        }
        return (
          <span
            key={link.label}
            onClick={() =>
              toast('Still in development...Pls wait!', {
                closeButton: true,
                description: 'Sam is working on it!',
                className: 'font-bold'
              })
            }
            className="text-foreground hover:text-foreground/80 cursor-pointer text-base font-medium capitalize transition-all duration-300"
          >
            {link.label}
          </span>
        )
      })}
      <ModeSwitcher />
    </div>
  )
}

export default Header
