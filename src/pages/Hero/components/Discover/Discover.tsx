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

export default Discover
