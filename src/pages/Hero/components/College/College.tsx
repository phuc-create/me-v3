import React, { useRef } from 'react'
import { Section, Text, TextGroup } from '../../../../components'
// import City from '../../../../assets/city.png'
import PaperPlane from '../../../../assets/paper-plane.png'
import Building from '../../../../assets/building.png'
import { Sine, gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.scss'

gsap.registerPlugin(ScrollTrigger)

const College = () => {
  const collegeRef = useRef(null)
  const planeRef = useRef(null)
  useGSAP(
    context => {
      // animate building
      gsap.from('.building', {
        y: '-120%',
        opacity: 0,
        duration: 1,
        ease: Sine.easeInOut,
        // stagger: 0.05,
        scrollTrigger: {
          trigger: '.building',
          // markers: true,
          start: 'top 85%',
          end: 'top 95%',
          scrub: 1,
          toggleActions: 'restart none none none'
        }
      })

      // animate airplane
      gsap.from(planeRef.current, {
        x: '-100%',
        opacity: 0,
        duration: 1,
        ease: Sine.easeInOut,
        stagger: 0.05,
        scrollTrigger: {
          trigger: planeRef.current,
          // markers: true,
          start: 'top center',
          end: 'top center',
          scrub: 1,
          toggleActions: 'restart none none none'
        }
      })

      gsap.to('.paper-plane2', {
        duration: 2,
        repeat: -1,
        yoyo: true,
        y: -25,
        ease: Sine.easeInOut
      })
      return () => context.clear()
    },
    { dependencies: [], scope: '.college' }
  )

  return (
    <Section
      className="college"
      mainChildren={
        <>
          <img className="building" src={Building} alt="city" />
          <img
            className="paper-plane2"
            ref={planeRef}
            src={PaperPlane}
            alt="show"
          />
        </>
      }
      ref={collegeRef}
    >
      <TextGroup className="college-text">
        <Text size={1.25}>
          In August of 2018, I entered a new phase of my life.
        </Text>
        <Text size={1.25}>
          I began my college journey in the bustling city.
        </Text>
        <Text size={1.25}>
          Feeling both excited and nervous as I took my first steps onto campus,
          eager to meet new people and broaden my horizons.
        </Text>
        <br />
        <Text size={1.25}>A life-changing experience.</Text>
      </TextGroup>
    </Section>
  )
}

export default College
