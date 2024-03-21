import React from 'react'
import { Section } from '../../../../components'
// import City from '../../../../assets/city.png'
import Building from '../../../../assets/building.png'
import './styles.scss'

const College = () => {
  return (
    <Section
      className="college"
      mainChildren={<img className="building" src={Building} alt="city" />}
    ></Section>
  )
}

export default College
