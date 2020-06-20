import React from 'react'

import Animation from '../../Animation'
import Container from '../../Container'
import Section from '../../Section'

// @ts-ignore
import styles from './styles.styl'

import './animations/carte1.js'

// @ts-ignore
import india from './animations/medaillon1.gif'

// ------------------------------------------------------------------ # Public #

export default function GlobalRecruitmentSolutions() {
  return (
    <Section className={styles.section}>
      <Animation
        className={styles.anim}
        hasResources
        isBackground
        composition="75E0C7C39499C6409F115355863EC003"
        name="carte1"
      >
        <img className={styles.img} src={india} alt="" />
      </Animation>

      <Container className={styles.container}>
        <h1>
          Global Executive
          <br />
          Search &amp;
          <br />
          HR Development
          <br />
          Solutions
        </h1>

        <p>
          Our independent boutique search firms <br />
          across international markets.
        </p>
      </Container>
    </Section>
  )
}
