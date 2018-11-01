import React from 'react'

import Animation from '../../animation'
import Container from '../../container'

// @ts-ignore
import styles from './GlobalRecruitmentSolutions.styl'

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

      <Container className={styles.content}>
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
