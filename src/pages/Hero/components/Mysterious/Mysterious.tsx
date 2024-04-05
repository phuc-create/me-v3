import React from 'react'
import CuriousEyeOpen from '../../../../assets/hmm.png'
import CuriousEyeClose from '../../../../assets/hmm2.png'
import { Section, Text } from '../../../../components'
import './styles.scss'

const Mysterious = () => {
  return (
    <Section className="mysterious">
      <article className="content">
        <Text className="chilling"># Keep Chilling... 🙄</Text>
        <section className="bit-lang">
          <Text className="text">BOO YAHH 😎 </Text>
          <Text className="text">
            I JUST KEEP REMINDING YOU OF MY EXISTENCE!!😲
          </Text>
          <Text className="text">This time with extra hearts for you 🥰</Text>
          <div className="showcase">
            <img className="hmm" src={CuriousEyeOpen} alt="hmmmm" />
            <img className="hmm2" src={CuriousEyeClose} alt="hmmmm" />
          </div>
        </section>
      </article>
    </Section>
  )
}

export default Mysterious
