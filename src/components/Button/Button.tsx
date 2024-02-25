import React from 'react'
import './styles.scss'
import { Link } from 'react-router-dom'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  link?: boolean
  to?: string
}

const Button: React.FC<ButtonProps> = ({
  link,
  to,
  onClick,
  children,
  ...props
}) => {
  const renderWithLink = () => {
    return (
      <Link to={to || '_/#'} className="button-container">
        <span className="primary-span"></span>
        <span className="secondary-span"></span>
        <span className="content-span">{children}</span>
      </Link>
    )
  }

  const renderNormal = () => {
    return (
      <button className="button-container" onClick={onClick} {...props}>
        <span className="primary-span"></span>
        <span className="secondary-span"></span>
        <span className="content-span">{children}</span>
      </button>
    )
  }
  return link ? renderWithLink() : renderNormal()
}

export default Button
