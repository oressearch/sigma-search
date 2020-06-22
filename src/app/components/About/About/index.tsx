import React from 'react'

import Container from '../../Container'
import Section from '../../Section'

// @ts-ignore
import styles from './styles.styl'

// ------------------------------------------------------------------ # Public #

export default function About() {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.container}>
          <h1>About us</h1>
          <p></p>

          <p>
            Sigma Search Partners was established in 1996 in response to demand
            from client organisations who want to work with independent boutique
            search firms across international markets.
          </p>

          <p>
            Today the partnership is represented in Czech Republic, France,
            Germany, Italy, Ireland, India, Benelux, Spain, UK and USA.
          </p>

          <p>
            We are actively extending our international presence, a process
            which is limited only by the challenge of finding firms which share
            our demanding professional standards.
          </p>
        </div>
      </Container>
    </Section>
  )
}
