import React from 'react'
import { Section, Text, TextGroup } from '../../../../components'
// import City from '../../../../assets/city.png'
import PaperPlane from '../../../../assets/paper-plane.png'
import Building from '../../../../assets/building.png'
import './styles.scss'

const College = () => {
  return (
    <Section
      className="college"
      mainChildren={<img className="building" src={Building} alt="city" />}
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
      <img className="paper-plane" src={PaperPlane} alt="show" />
    </Section>
  )
}

export default College
