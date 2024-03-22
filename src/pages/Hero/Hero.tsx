import React from 'react'
import { Section } from '../../components'
import './styles.scss'
import { College, Discover, HomeTown, Introduce } from './components'

const Hero = () => {
  return (
    <>
      <Introduce />
      <HomeTown />
      <College />
      <Discover />
      {/* TESTING */}
      <Section className="hero">
        <div className="text-wrapper">
          <div className="text-wrapper-group">
            <span className="prefix">I'm</span>
            <span className="name">DEMO</span>
          </div>
          <span className="job">A Software Engineer</span>
          <p className="pharagraph">
            A caffeinated crusader of code, friendly neighborhood, wrangling
            pixels for several years. Enough JavaScript to make your toaster
            dance the Macarena!. And I can code faster than you can say
            'Avengers Assemble!
          </p>
          <span className="poppins-thin-italic help-text">
            Don't Don't worry, I probably know what I'm doing with HTML.
          </span>
        </div>
      </Section>
    </>
  )
}

export default Hero
