import React from 'react'

import Animation from '../../Animation'
import Container from '../../Container'

// @ts-ignore
import styles from './styles.styl'

import './animations/carte1.js'

// ------------------------------------------------------------------ # Public #

export default function GlobalRecruitmentSolutions() {
  return (
    <section className={styles.section}>
      <Animation
        hasResources
        isBackground
        composition="75E0C7C39499C6409F115355863EC003"
        name="carte1"
      />

      <Container className={styles.container}>
        <h1>
          Global<br />
          Recruitment<br />
          Solutions
        </h1>

        <p>
          Our independent boutique search firms <br />
          across international markets.
        </p>
      </Container>
    </section>
  )
}
