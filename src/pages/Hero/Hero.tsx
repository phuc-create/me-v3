import React, { useEffect, useRef, useState } from 'react'
import './styles.scss'
import {
  Collecting,
  College,
  Discover,
  HomeTown,
  Introduce,
  Mysterious
} from './components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const Hero = () => {
  const scrollContainerRef = useRef(null)

  return (
    <div ref={scrollContainerRef}>
      <Introduce />
      <HomeTown />
      <College />
      <Discover />
      <Collecting />
      <Mysterious />
    </div>
  )
}

export default Hero
