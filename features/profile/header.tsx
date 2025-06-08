import React from 'react'
interface HeaderProps { }

const links = ['Home', 'Contact', 'About']

const Header = () => {
  return (
    <div className="flex items-center justify-end gap-4 p-2 z-50">
      {links.map(link => {
        return (
          <a
            key={link}
            className="text-foreground hover:text-foreground/80 cursor-pointer font-mono text-sm font-medium transition-all duration-300"
          >
            {link}
          </a>
        )
      })}
      {/* <a className="text-lg font-semibold">Contact</a>
      <a className="text-lg font-semibold">About</a> */}
    </div>
  )
}

export default Header
