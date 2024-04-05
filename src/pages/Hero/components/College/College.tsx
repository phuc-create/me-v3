import React, { useRef } from 'react'
import { Section, Text, TextGroup } from '../../../../components'
// import City from '../../../../assets/city.png'
import PaperPlane from '../../../../assets/paper-plane.png'
import Building from '../../../../assets/building.png'
import './styles.scss'
import { useGSAP } from '@gsap/react'
import gsap, { Sine } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const College = () => {
  const collegeRef = useRef(null)
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
      gsap.from('.paperplane', {
        x: 180,
        opacity: 0,
        duration: 1,
        ease: Sine.easeInOut,
        // stagger: 0.05,
        scrollTrigger: {
          trigger: '.paperplane',
          start: 'top 99%',
          end: 'top 95%',
          scrub: 1,
          toggleActions: 'restart none none none'
        }
      })

      gsap.to('.paperplane', {
        duration: 2,
        repeat: -1,
        yoyo: true,
        y: -25,
        ease: 'sine.inOut'
      })

      // gsap.from('.contents-text', {
      //   duration: 1,
      //   scrollTrigger: {
      //     trigger: '.contents-text',
      //     // markers: true,
      //     start: 'top 85%',
      //     end: 'top 95%',
      //     scrub: 1,
      //     toggleActions: 'restart pause none pause'
      //   },
      //   opacity: 0,
      //   scale: 1,
      //   y: '50%'
      // })
      return () => context.clear()
    },
    { dependencies: [], scope: collegeRef }
  )
  return (
    <Section
      className="college"
      mainChildren={<img className="building" src={Building} alt="city" />}
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
      <img className="paper-plane paperplane" src={PaperPlane} alt="show" />
    </Section>
  )
}

export default College
