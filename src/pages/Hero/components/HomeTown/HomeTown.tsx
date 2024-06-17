import React, { useEffect, useRef } from 'react'
import BirdGroup from '../../../../assets/bird-group.png'
import PaperPlane from '../../../../assets/paper-plane.png'
import Sun from '../../../../assets/sun.png'
import { Section } from '../../../../components'
import { motion, useInView, useAnimation } from 'framer-motion'
import './styles.scss'

const HomeTown = () => {
  const howmtownRef = useRef(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView])

  return (
    <Section
      className="hometown"
      id="hometown"
      mainChildren={
        <motion.div
          className="wrap-moutain"
          variants={{
            hidden: { opacity: 0, x: '-2px', y: '-400px' },
            visible: { opacity: 1, x: '3px', y: '0px' }
          }}
          initial="hidden"
          animate={controls}
          transition={{
            x: { duration: 2, repeat: Infinity, repeatType: 'reverse' },
            y: {
              duration: 0.5
            }
          }}
        ></motion.div>
      }
      ref={howmtownRef}
    >
      <div ref={ref}>
        <motion.img
          className="sun"
          src={Sun}
          alt="show"
          variants={{
            hidden: { opacity: 0, x: '-300px', y: '-20px', rotate: '0deg' },
            visible: { opacity: 1, x: '0px', y: '0px', rotate: '360deg' }
          }}
          initial="hidden"
          animate={controls}
          transition={{
            x: { duration: 0.5 },
            rotate: { ease: 'linear', repeat: Infinity, duration: 6 },
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }}
        // viewport={{ once: true }}
        />
      </div>
      <img className="bird-group" src={BirdGroup} alt="show" />

      <motion.img
        className="paper-plane"
        src={PaperPlane}
        alt="show"
        variants={{
          hidden: { opacity: 0, x: '300px', y: '40px' },
          visible: { opacity: 1, x: '0px', y: '0px' }
        }}
        initial="hidden"
        animate={controls}
        whileInView="visible"
        transition={{
          x: { duration: 0.5, type: 'spring' },
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse'
          }
        }}
        viewport={{ margin: '300px 0px 50px 0px' }}
      />
      <motion.div
        className="contents"
        variants={{
          hidden: { opacity: 0, x: '-300px' },
          visible: { opacity: 1, x: '0px' }
        }}
        initial="hidden"
        animate={controls}
        whileInView="visible"
        transition={{
          x: { duration: 0.5, type: 'spring' }
        }}
      >
        <div className="contents-text">
          I have a childhood, born and bred at Dak Lak, where covered surrounded
          by the <span className="light-mountain">mountains</span>
        </div>
        <div className="contents-text">
          Now, I'm living in Ho Chi Minh City, where I'll start my career{' '}
        </div>
      </motion.div>
    </Section>
  )
}

export default HomeTown
