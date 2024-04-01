import React from 'react'
import './styles.scss'
import {
  Collecting,
  College,
  Discover,
  HomeTown,
  Introduce
} from './components'

const Hero = () => {
  return (
    <>
      <Introduce />
      <HomeTown />
      <College />
      <Discover />
      <Collecting />
    </>
  )
}

export default Hero
