import React from 'react'
import CuriousEyeOpen from '../../../../assets/hmm.png'
import CuriousEyeClose from '../../../../assets/hmm2.png'
import { Section } from '../../../../components'
import './styles.scss'

const Mysterious = () => {
  return (
    <Section className="mysterious">
      <div className="time-line-abs-lang"># Keep Chilling... 🙄</div>
      <div className="bit-lang">
        <div className="bit-study-lang">
          <div className="fb-f">BOO YAHH 😎</div>
          <div className="fb-f">I JUST KEEP IT UP ON YOUR MIND!😲</div>
          <div className="showcase">
            <img className="hmm" src={CuriousEyeOpen} alt="hmmmm" />
            <img className="hmm2" src={CuriousEyeClose} alt="hmmmm" />
          </div>
          <div className="fb-f">
            I hope I can receive your feedback as soon as possible, this time
            for you🥰{' '}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Mysterious
