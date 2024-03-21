import React from 'react'
import './styles.scss'
import classNames from 'classnames'
interface SectionProps {
  children?: React.ReactNode
  className?: string
  id?: string
  containerID?: string
}
const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  containerID
}) => {
  const cls = classNames('section-wrap', className)
  const ctnCls = classNames('section-container')
  return (
    <section className={cls} id={id}>
      <div className={ctnCls} id={containerID}>
        {children}
      </div>
    </section>
  )
}

export default Section
