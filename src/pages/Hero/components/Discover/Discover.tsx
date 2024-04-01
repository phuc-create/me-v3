import React from 'react'
import { Section, Text, TextGroup } from '../../../../components'
import { StarParallax } from './components'
import Rada from '../../../../assets/rada.png'
import Earth from '../../../../assets/earth.png'
import PaperPlane from '../../../../assets/paper-plane.png'
import './styles.scss'

const Discover = () => {
  return (
    <Section mainChildren={<StarParallax />} className="discover">
      <img className="rada" src={Rada} alt="rada" />
      <img className="earth" src={Earth} alt="Earth" />
      <img className="paper-plane" src={PaperPlane} alt="show" />
      <TextGroup className="discover-text">
        <Text size={1.25}>
          I didn't realize how small I was until I stepped outside.
        </Text>
        <br />
        <Text size={1.25}>
          It's understandable to feel small and insignificant at times,
        </Text>
        <Text size={1.25}>
          but remember that your unique qualities and strengths make you
          valuable and important in your way.
        </Text>
      </TextGroup>
    </Section>
  )
}

export default Discover
