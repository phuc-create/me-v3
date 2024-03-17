import React from 'react'
import './styles.scss'
interface SectionProps {
  children?: React.ReactNode
}
const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className="section-wrap">{children}</section>
}

export default Section
