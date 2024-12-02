import React from 'react'

import Animation from '../../Animation'
import Container from '../../Container'
import Section from '../../Section'

// @ts-ignore
import styles from './styles.styl'

// ------------------------------------------------------------------ # Public #

export default function GlobalRecruitmentSolutions() {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <h1 className={styles.title}>
          Global Executive Search
        </h1>

        <p>
          Our independent boutique search firms across international markets.
        </p>
      </Container>
    </Section>
  )
}
