import React, { useRef } from 'react'
import BirdGroup from '../../../../assets/bird-group.png'
import PaperPlane from '../../../../assets/paper-plane.png'
import Sun from '../../../../assets/sun.png'
import { Section } from '../../../../components'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Back, gsap, Sine } from 'gsap'
import './styles.scss'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const HomeTown = () => {
  const howmtownRef = useRef(null)
  useGSAP(
    context => {
      // animate sun
      gsap.from('.sun', {
        x: -180,
        opacity: 0,
        duration: 1,
        ease: Sine.easeInOut,
        // stagger: 0.05,
        scrollTrigger: {
          trigger: '.sun',
          start: 'top bottom',
          end: 'top 75%',
          scrub: 1,
          toggleActions: 'restart none none none'
        }
      })
      gsap.to('.sun', {
        duration: 8,
        rotation: +180,
        yoyo: true,
        ease: 'sine.inOut',
        repeat: -1
      })
      gsap.from('.bird-group', {
        x: -180,
        duration: 1,
        ease: Sine.easeInOut,
        // stagger: 0.05,
        scrollTrigger: {
          trigger: '.bird-group',
          start: 'top 99%',

          end: 'top 80%',
          scrub: 1,
          toggleActions: 'restart none none none'
        }
      })
      // animate airplane
      gsap.from('.paper-plane', {
        x: 180,
        opacity: 0,
        duration: 1,
        ease: Sine.easeInOut,
        // stagger: 0.05,
        scrollTrigger: {
          trigger: '.paper-plane',
          start: 'top 99%',

          end: 'top 95%',
          scrub: 1,
          toggleActions: 'restart none none none'
        }
      })

      gsap.to('.paper-plane', {
        duration: 2,
        repeat: -1,
        yoyo: true,
        y: -25,
        ease: 'sine.inOut'
      })

      // animate mountain
      gsap.from('.wrap-moutain', {
        duration: 1,
        scrollTrigger: {
          trigger: '.wrap-moutain',
          // markers: true,
          start: 'top 95%',
          end: 'top 95%',
          scrub: 1,
          toggleActions: 'restart pause none pause'
        },
        opacity: 0,
        scale: 1,
        y: '-100%'
      })

      gsap.from('.contents-text', {
        duration: 1,
        scrollTrigger: {
          trigger: '.contents-text',
          // markers: true,
          start: 'top 85%',
          end: 'top 95%',
          scrub: 1,
          toggleActions: 'restart pause none pause'
        },
        opacity: 0,
        scale: 1,
        y: '50%'
      })
      return () => context.clear()
    },
    { scope: howmtownRef }
  )

  return (
    <Section
      className="hometown"
      id="hometown"
      mainChildren={<div className="wrap-moutain"></div>}
      ref={howmtownRef}
    >
      <img className="sun" src={Sun} alt="show" />
      <img className="bird-group" src={BirdGroup} alt="show" />

      <img className="paper-plane" src={PaperPlane} alt="show" />
      <div className="contents">
        <div className="contents-text">
          I have a childhood, born and bred at Dak Lak, where covered surrounded
          by the <span className="light-mountain">mountains</span>
        </div>
        <div className="contents-text">
          Now, I'm living in Ho Chi Minh City, where I'll start my career{' '}
        </div>
      </div>
    </Section>
  )
}

export default HomeTown
