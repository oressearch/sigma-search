import React from 'react'

import Container from '../../Container'

// @ts-ignore
import styles from './styles.styl'

// @ts-ignore
import background from './images/our-team.jpeg'

// ------------------------------------------------------------------ # Public #

export default function OurCapability() {
  return (
    <section id="our-team" className={styles.section}>
      <div className={styles.container}>
        <Container>
          <h2>Our team</h2>
        </Container>
      </div>
      <img className={styles.background} src={background} alt="Our team" />
    </section>
  )
}
