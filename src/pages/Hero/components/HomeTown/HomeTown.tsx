import React from 'react'
import BirdGroup from '../../../../assets/bird-group.png'
import PaperPlane from '../../../../assets/paper-plane.png'
import Sun from '../../../../assets/sun.png'
import { Section } from '../../../../components'
import './styles.scss'

const HomeTown = () => {
  return (
    <Section className="ab-page-life">
      <img className="gsap-sun" src={Sun} alt="show" />
      <img className="gsap-bird-n" src={BirdGroup} alt="show" />
      <div className="wrap-moutain"></div>
      <img className="gsap-airplane" src={PaperPlane} alt="show" />
      <div className="time-life">
        <div className="bit-study">
          {' '}
          I have a childhood, born and bred at Dak Lak, where covered surrounded
          by the <span className="light-mountain">mountains</span>
        </div>
        <div className="bit-study">
          {' '}
          Now, I'm living in Ho Chi Minh City, where I'll start my career{' '}
        </div>
      </div>
    </Section>
  )
}

export default HomeTown
