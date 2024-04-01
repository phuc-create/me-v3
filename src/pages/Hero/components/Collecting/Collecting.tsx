import React from 'react'
import { Section, Text, TextGroup } from '../../../../components'
import Book from '../../../../assets/book.png'
import NoteAndPen from '../../../../assets/note-book.png'
import PaperPlane from '../../../../assets/paper-plane.png'
import './styles.scss'

const Collecting = () => {
  return (
    <Section className="collecting">
      <img className="book" src={Book} alt="show" />
      <img className="airplane" src={PaperPlane} alt="show" />
      <TextGroup className="collecting-text">
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

export default Collecting
