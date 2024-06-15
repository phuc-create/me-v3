import React, { useEffect, useRef } from 'react'
import { FadeInWhenVisible, Section } from '../../../../components'
import { motion, useAnimationControls } from 'framer-motion'

import './styles.scss'

const Introduce = () => {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const jobRef = useRef(null)
  const controls = useAnimationControls()

  useEffect(() => {
    controls.set(() => ({
      y: '150px',
      opacity: 0
    }))
    controls.start(i => ({
      y: '0px',
      opacity: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
        delay: i * 0.2
      }
    }))
  }, [])

  const jobTextAnimate = 'A Software Engineer'.split('').map((w, i) => (
    <motion.span
      className={`${w === ' ' ? 'whitespace' : ''}`}
      key={i}
      initial={{
        y: '150px',
        opacity: 0
      }}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
        delay: i * 0.1
      }}
      animate={{
        y: '0px',
        opacity: 1
      }}
    >
      {w}
    </motion.span>
  ))

  const iam = "I'm ".split('').map((w, i) => (
    <motion.div
      className={`prefix ${w === ' ' ? 'whitespace' : ''}`}
      key={w}
      initial={{
        y: '150px',
        opacity: 0
      }}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 300,
        delay: i * 0.1
      }}
      animate={{
        y: '0px',
        opacity: 1
      }}
    >
      {w}
    </motion.div>
  ))

  const sam = 'SAM'.split('').map((w, i) => (
    <motion.div
      className="name"
      key={w}
      initial={{
        scaleY: 2,
        y: '-150px',
        opacity: 0
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        delay: i * 0.1
      }}
      animate={{ scaleY: 1, y: '0px', opacity: 1 }}
    >
      {w}
    </motion.div>
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
        <FadeInWhenVisible>
          <motion.div className="text-wrapper-group">
            {iam}
            {sam}
          </motion.div>
          <motion.div
            className="job"
            ref={jobRef}
            animate={controls}
            custom={6}
          >
            {jobTextAnimate}
          </motion.div>
          <motion.div className="pharagraph" animate={controls} custom={2}>
            {pharagraph}
          </motion.div>
          <motion.div
            className="poppins-extralight-italic help-text"
            animate={controls}
            custom={4}
          >
            {helpText}
          </motion.div>
        </FadeInWhenVisible>
      </div>
    </Section>
  )
}

export default Introduce
