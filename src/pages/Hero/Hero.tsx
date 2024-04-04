import React from 'react'
import './styles.scss'
import {
  Collecting,
  College,
  Discover,
  HomeTown,
  Introduce,
  Mysterious
} from './components'

const Hero = () => {
  return (
    <>
      <Introduce />
      <HomeTown />
      <College />
      <Discover />
      <Collecting />
      <Mysterious />
    </>
  )
}

export default Hero
