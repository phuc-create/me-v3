import React from 'react'
import BirdGroup from '../../../../assets/bird-group.png'
import PaperPlane from '../../../../assets/paper-plane.png'
import Sun from '../../../../assets/sun.png'
import { Section } from '../../../../components'
import './styles.scss'

const HomeTown = () => {
  return (
    <Section
      className="hometown"
      id="hometown"
      mainChildren={<div className="wrap-moutain"></div>}
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
