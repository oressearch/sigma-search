import React from 'react'

import Animation from '../../animation'
import Container from '../../container'
import Section from '../../section'

// @ts-ignore
import styles from './WhatWeDo.styl'

import './animations/schema.js'

// ------------------------------------------------------------------ # Public #

export default function WhatWeDo() {
  return (
    <Section className={styles.section}>
      <Container>
        <h2>What we do</h2>
      </Container>

      <Animation
        composition="75E0C7C39499C6409F115355863EC004"
        name="schema"
      />
    </Section>
  )
}
