import React, {MouseEvent} from 'react'
import {Link} from 'react-router-dom'

import Container from '../../Container'
import Section from '../../Section'

import {Props} from '../index'

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
import usa from './images/usa.jpeg'
// @ts-ignore
import warsaw from './images/warsaw.jpeg'

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
  [-1, warsaw],
]

if (allCountries.length % 2 === 1) {
  allCountries.push([-1, logo])
}

const countriesTop = allCountries.slice(0, allCountries.length / 2)
const countriesBottom = allCountries.slice(allCountries.length / 2)

// ------------------------------------------------------------------ # Public #

export default class extends React.Component<Props, {}> {
  scrollToConsultants = () => {
    const consultants = document.getElementById('consultants')

    setTimeout(
      () =>
        window.scrollTo({
          behavior: 'smooth',
          top: (consultants && consultants.offsetTop - 100) || 0,
        }),
      400,
    )
  }

  componentDidMount() {
    const params = window.location.href.split('index=')
    if (params.length > 1) {
      this.scrollToConsultants()
      this.props.onCountryClick(+params[1])(null)
    }
  }

  onCountryClick = (index: number) => (e: MouseEvent<HTMLAnchorElement>) => {
    this.scrollToConsultants()
    return this.props.onCountryClick(index)(e)
  }

  render() {
    // tslint:disable-next-line
    const Country = ({index, src}: {index: number; src: string}) => {
      if (index === -1) {
        return (
          <div className={styles.country}>
            <img src={src} alt="" />
          </div>
        )
      }

      return (
        <a
          href="#"
          onClick={this.onCountryClick(index)}
          className={styles.country}
        >
          <img src={src} alt="" />
        </a>
      )
    }

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
}
