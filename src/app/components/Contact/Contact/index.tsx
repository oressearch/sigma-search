import React, {MouseEvent} from 'react'

import Container from '../../Container'
import Section from '../../Section'

import {Props} from '../index'

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

export default class extends React.Component<Props, {}> {
  scrollToConsultants = () => {
    const consultants = document.getElementById('consultants')

    setTimeout(() => window.scrollTo({
      behavior: 'smooth',
      top: consultants && consultants.offsetTop - 100 || 0,
    }), 400)
  }

  componentDidMount() {
    const params = window.location.href.split('index=')
    if (params.length > 1) {
      console.log(+params[1])
      this.scrollToConsultants()
      this.props.onCountryClick(+params[1])(null)
    }
  }

  onCountryClick = (index: number) => (e: MouseEvent<HTMLAnchorElement>) => {
    this.scrollToConsultants()
    return this.props.onCountryClick(index)(e)
  }

  render() {
    return (
      <Section className={styles.section}>
        <a href="#" onClick={this.onCountryClick(8)} className={styles.country}>
          <img src={usa} alt="USA" />
        </a>
        <a href="#" onClick={this.onCountryClick(3)} className={styles.country}>
          <img src={dublin} alt="Dublin" />
        </a>
        <a href="#" onClick={this.onCountryClick(7)} className={styles.country}>
          <img src={london} alt="London" />
        </a>
        <a href="#" onClick={this.onCountryClick(6)} className={styles.country}>
          <img src={madrid} alt="Madrid" />
        </a>
        <div className={styles.country}>
          <img src={milan} alt="Milan" />
        </div>
        <a href="#" onClick={this.onCountryClick(2)} className={styles.country}>
          <img src={munich} alt="Munich" />
        </a>
        <a href="#" onClick={this.onCountryClick(1)} className={styles.country}>
          <img src={paris} alt="Paris" />
        </a>
        <a href="#" onClick={this.onCountryClick(0)} className={styles.country}>
          <img src={prague} alt="Prague" />
        </a>
        <a href="#" onClick={this.onCountryClick(5)} className={styles.country}>
          <img src={warsaw} alt="Warsaw" />
        </a>

        <Container className={styles.container}>
          <h1>Contact us</h1>
          <p>By countries</p>
        </Container>
      </Section>
    )
  }
}
