import React from 'react'
import { Section, Text, TextGroup } from '../../../../components'
import Book from '../../../../assets/book.png'
import PaperPlane from '../../../../assets/paper-plane.png'
import './styles.scss'

const Collecting = () => {
  return (
    <Section className="collecting">
      <img className="book" src={Book} alt="show" />
      <img className="airplane" src={PaperPlane} alt="show" />
      <TextGroup className="collecting-text">
        <Text size={1.25}>
          Who knows? Maybe mysterious learning is the key to becoming a Pokemon
          master! Gotta learn 'em all!
        </Text>
        <br />
        <Text size={1.25} variant="regular-italic">
          the more you learn, the more you'll <b>'earn'</b>
        </Text>
      </TextGroup>
    </Section>
  )
}

export default Collecting
