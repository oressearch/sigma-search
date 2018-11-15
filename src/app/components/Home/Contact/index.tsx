import React from 'react'
import {Link} from 'react-router-dom'

import Container from '../../Container'
import Section from '../../Section'

// @ts-ignore
import styles from './styles.styl'

// @ts-ignore
import dublin from './images/dublin.jpeg'
// @ts-ignore
import london from './images/london.jpeg'
// @ts-ignore
import madrid from './images/madrid.jpeg'
// @ts-ignore
import milan from './images/milan.jpeg'
// @ts-ignore
import munich from './images/munich.jpeg'
// @ts-ignore
import paris from './images/paris.jpeg'
// @ts-ignore
import prague from './images/prague.jpeg'
// @ts-ignore
import usa from './images/usa.jpeg'
// @ts-ignore
import warsaw from './images/warsaw.jpeg'

// ------------------------------------------------------------------ # Public #

export default function Contact() {
  return (
    <Section className={styles.section}>
      <Link className={styles.country} to="/contact?index=8">
        <img src={usa} alt="USA" />
      </Link>
      <Link className={styles.country} to="/contact?index=3">
        <img src={dublin} alt="Dublin" />
      </Link>
      <Link className={styles.country} to="/contact?index=7">
        <img src={london} alt="London" />
      </Link>
      <Link className={styles.country} to="/contact?index=6">
        <img src={madrid} alt="Madrid" />
      </Link>
      <div className={styles.country}>
        <img src={milan} alt="Milan" />
      </div>
      <Link className={styles.country} to="/contact?index=2">
        <img src={munich} alt="Munich" />
      </Link>
      <Link className={styles.country} to="/contact?index=1">
        <img src={paris} alt="Paris" />
      </Link>
      <Link className={styles.country} to="/contact?index=0">
        <img src={prague} alt="Prague" />
      </Link>
      <Link className={styles.country} to="/contact?index=5">
        <img src={warsaw} alt="Warsaw" />
      </Link>

      <Container className={styles.container}>
        <h1>Contact us</h1>
        <p>By countries</p>
      </Container>
    </Section>
  )
}
