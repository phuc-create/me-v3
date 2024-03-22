import React, { CSSProperties } from 'react'
import classNames from 'classnames'
import './styles.scss'
interface TextProps {
  variant?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black'
    | 'thin-italic'
    | 'extralight-italic'
    | 'light-italic'
    | 'regular-italic'
    | 'medium-italic'
    | 'semibold-italic'
    | 'bold-italic'
    | 'extrabold-italic'
    | 'black-italic'
  children?: React.ReactNode
  className?: string
  size?: number
}
interface TextGroupProps {
  children?: React.ReactNode
  className?: string
}
const Text = React.forwardRef<null, TextProps>(
  ({ size = 1, variant, children, className }) => {
    const cls = classNames('text', className, `poppins-${variant ?? '?'}`, {
      '--font-size': size + 'rem'
    })
    return (
      <span
        className={cls}
        style={{ '--font-size': size + 'rem' } as CSSProperties}
      >
        {children}
      </span>
    )
  }
)

export const TextGroup = React.forwardRef<null, TextGroupProps>(
  ({ children, className }) => {
    const cls = classNames('text-group', className)
    return <div className={cls}>{children}</div>
  }
)

Text.displayName = 'Text'
TextGroup.displayName = 'TextGroup'
export default Text
