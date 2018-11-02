import React from 'react'

import Container from '../../container'
import Section from '../../section'

// @ts-ignore
import styles from './Contact.styl'

// @ts-ignore
import background from './images/contact.jpeg'

// ------------------------------------------------------------------ # Public #

export default function Contact() {
  return (
    <Section className={styles.section}>
      <img src={background} alt="" />

      <Container className={styles.container}>
        <h1>Contact us</h1>
        <p>By countries</p>
      </Container>
    </Section>
  )
}
