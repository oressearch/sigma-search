import React from 'react'
import {Link} from 'react-router-dom'

import Container from '../../Container'
import Section from '../../Section'

// @ts-ignore
import styles from './styles.styl'

// @ts-ignore
import logo from '../../App/images/logo.jpeg'
// @ts-ignore
import benelux from './images/benelux.jpeg'
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
import pune from './images/pune.jpeg'
// @ts-ignore
import usa from './images/usa.jpeg'

const allCountries = [
  [0, benelux],
  [9, usa],
  [4, dublin],
  [8, london],
  [7, madrid],
  [-1, milan],
  [3, munich],
  [2, paris],
  [1, prague],
  [6, pune],
]

if (allCountries.length % 2 === 1) {
  allCountries.push([-1, logo])
}

const countriesTop = allCountries.slice(0, allCountries.length / 2)
const countriesBottom = allCountries.slice(allCountries.length / 2)

function Country({index, src}: {index: number; src: string}) {
  if (index === -1) {
    return (
      <div className={styles.country}>
        <img src={src} alt="" />
      </div>
    )
  }

  return (
    <Link className={styles.country} to={`/contact?index=${index}`}>
      <img src={src} alt="" />
    </Link>
  )
}

// ------------------------------------------------------------------ # Public #

export default function Contact() {
  return (
    <Section className={styles.section} style={{flexDirection: 'column'}}>
      <div className={styles.countries}>
        {countriesTop.map(([index, src], key) => (
          <Country key={key} index={index} src={src} />
        ))}
      </div>

      <div className={styles.countries}>
        {countriesBottom.map(([index, src], key) => (
          <Country key={key} index={index} src={src} />
        ))}
      </div>

      <Container className={styles.container}>
        <h1>Contact us</h1>
        <p>By countries</p>
      </Container>
    </Section>
  )
}
