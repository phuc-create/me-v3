import React, { useRef } from 'react'
import { Section } from '../../../../components'
import { useGSAP } from '@gsap/react'
import { Back, gsap } from 'gsap'

import './styles.scss'

const Introduce = () => {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const jobRef = useRef(null)

  useGSAP(
    context => {
      const tl = gsap.timeline({ paused: true })
      tl.from(['.reveal-animate', '.animate-job'], {
        duration: 1,
        ease: Back.easeInOut,
        yPercent: 130,
        stagger: {
          each: 0.05
        }
      })
      tl.from('.word-animate', {
        duration: 1,
        ease: Back.easeInOut,
        yPercent: 330,
        stagger: {
          each: 0.05
        }
      })
      tl.from('.help-animate', {
        duration: 1,
        ease: Back.easeInOut,
        yPercent: 200,
        stagger: {
          each: 0.05
        }
      })

      tl.play()

      return () => context.clear()
    },
    { scope: heroRef }
  )

  const jobTextAnimate = 'A Software Engineer'.split('').map((w, i) => (
    <span className={`animate-job ${w === ' ' ? 'whitespace' : ''}`} key={i}>
      {w}
    </span>
  ))

  const iam = "I'm ".split('').map(w => (
    <span
      className={`prefix reveal-animate ${w === ' ' ? 'whitespace' : ''}`}
      key={w}
    >
      {w}
    </span>
  ))

  const sam = 'SAM'.split('').map(w => (
    <span className="name reveal-animate" key={w}>
      {w}
    </span>
  ))

  const pharagraph =
    "A caffeinated crusader of code, friendly neighborhood, wrangling pixels for several years. Enough JavaScript to make your toaster dance the Macarena!. And I can code faster than you can say 'Avengers Assemble'!"
      .split(' ')
      .map((w, i) => (
        <span className="word-animate" key={i}>
          {w}
        </span>
      ))

  const helpText =
    "Don't Don't worry, I probably know what I'm doing with HTML."
      .split(' ')
      .map((w, i) => (
        <span className="help-animate" key={i}>
          {w}
        </span>
      ))
  return (
    <Section className="hero" ref={heroRef}>
      <div className="text-wrapper" ref={textRef}>
        <div className="text-wrapper-group">
          {iam} {sam}
        </div>
        <div className="job" ref={jobRef}>
          {jobTextAnimate}
        </div>
        <div className="pharagraph">{pharagraph}</div>
        <div className="poppins-extralight-italic help-text">{helpText}</div>
      </div>
    </Section>
  )
}

export default Introduce
