import React, { useEffect, useRef } from 'react'
import { Section, Text, TextGroup } from '../../../../components'
// import City from '../../../../assets/city.png'
import PaperPlane from '../../../../assets/paper-plane.png'
import Building from '../../../../assets/building.png'
import { motion, useAnimationControls, useInView } from 'framer-motion'
import './styles.scss'

const College = () => {
  const collegeRef = useRef(null)
  const planeRef = useRef(null)
  const textRef = useRef(null)
  const isInView = useInView(textRef)
  const textControls = useAnimationControls()

  useEffect(() => {
    if (isInView) {
      textControls.start(i => ({
        x: '0px',
        opacity: 1,
        transition: {
          type: 'spring',
          delay: i * 0.4
        }
      }))
    }
  }, [isInView])

  return (
    <Section
      className="college"
      mainChildren={
        <>
          <motion.img
            className="building"
            src={Building}
            alt="city"
            variants={{
              hidden: { opacity: 0, y: '400px' },
              visible: { opacity: 1, y: '0px' }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{
              y: { type: 'spring', duration: 0.5, stiffness: 200 }
            }}
          />
          <motion.img
            className="paper-plane2"
            ref={planeRef}
            src={PaperPlane}
            alt="show"
            variants={{
              hidden: { opacity: 0, x: '-200px', y: '-40px' },
              visible: { opacity: 1, x: '0px', y: '0px' }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{
              type: 'spring',
              x: { type: 'spring', duration: 0.5 },
              y: {
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
          />
        </>
      }
      ref={collegeRef}
    >
      <TextGroup className="college-text" ref={textRef}>
        <motion.div
          initial={{
            x: '-200px',
            opacity: 0
          }}
          animate={textControls}
          custom={1}
        >
          <Text size={1.25}>
            In August of 2018, I entered a new phase of my life.
          </Text>
        </motion.div>
        <motion.div
          initial={{
            x: '-200px',
            opacity: 0
          }}
          animate={textControls}
          custom={2}
        >
          <Text size={1.25}>
            I began my college journey in the bustling city.
          </Text>
        </motion.div>
        <motion.div
          initial={{
            x: '-200px',
            opacity: 0
          }}
          animate={textControls}
          custom={3}
        >
          <Text size={1.25}>
            Feeling both excited and nervous as I took my first steps onto
            campus, eager to meet new people and broaden my horizons.
          </Text>
        </motion.div>
        <br />
        <motion.div
          initial={{
            x: '-200px',
            opacity: 0
          }}
          animate={textControls}
          custom={4}
        >
          <Text size={1.25}>A life-changing experience.</Text>
        </motion.div>
      </TextGroup>
    </Section>
  )
}

export default College
