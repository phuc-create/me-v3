import React, { forwardRef } from 'react'
import './styles.scss'
import classNames from 'classnames'
interface SectionProps {
  children?: React.ReactNode
  mainChildren?: React.ReactNode
  className?: string
  id?: string
  containerID?: string
}
const Section = React.forwardRef<null, SectionProps>(
  ({ id, children, className, containerID, mainChildren }, ref) => {
    const cls = classNames('section-wrap', className)
    const ctnCls = classNames('section-container')
    return (
      <section className={cls} id={id} ref={ref}>
        {mainChildren}
        <div className={ctnCls} id={containerID}>
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = 'Section'
export default Section
