import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  link?: boolean
  to?: string
}

const Button = React.forwardRef<unknown, ButtonProps>((props, forwardedRef) => {
  const { link, to, onClick, children } = props
  const renderWithLink = () => {
    return (
      <Link
        to={to || '_/#'}
        className="button-container"
        ref={() => forwardedRef}
      >
        <span className="primary-span"></span>
        <span className="secondary-span"></span>
        <span className="content-span">{children}</span>
      </Link>
    )
  }

  const renderNormal = () => {
    return (
      <button
        className={'button-container ' + props.className}
        onClick={onClick}
        ref={() => forwardedRef}
      >
        <span className="primary-span"></span>
        <span className="secondary-span"></span>
        <span className="content-span">{children}</span>
      </button>
    )
  }
  return link ? renderWithLink() : renderNormal()
})

Button.displayName = 'Button'

export default Button
