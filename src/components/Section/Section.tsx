import React from 'react'
import './styles.scss'
import classNames from 'classnames'
interface SectionProps {
  children?: React.ReactNode
  className?: string
}
const Section: React.FC<SectionProps> = ({ children, className }) => {
  const cls = classNames('section-wrap', className)
  return (
    <section className={cls}>
      <div className="section-container">{children}</div>
    </section>
  )
}

export default Section
