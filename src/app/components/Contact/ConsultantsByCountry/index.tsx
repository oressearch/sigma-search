import React, {Fragment, MouseEvent} from 'react'

import AppContext from '../../App/context'

import Container from '../../Container'
import Section from '../../Section'

import {Consultant, Country} from '../../../functions/countries'

// @ts-ignore
import styles from './styles.styl'

// @ts-ignore
import iconEmail from './images/iconEmail.png'
// @ts-ignore
import iconLinkedIn from './images/iconLinkedIn.png'
// @ts-ignore
import iconPhone from './images/iconPhone.png'

// ----------------------------------------------------------------- # Private #

interface State {
  activeCountryIndex: number
  isLoading: boolean,
}

// ------------------------------------------------------------------ # Public #

export default class ConsultantsByCountry extends React.Component<{}, State> {
  static contextType = AppContext
  flags: number = 0b0000

  constructor(props: {}) {
    super(props)
    this.state = {
      activeCountryIndex: 0,
      isLoading: false,
    }
  }

  onNavClick = (index: number) => {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      this.flags = 0b0000
      this.setState({
        activeCountryIndex: index,
        isLoading: true,
      })
    }
  }

  cardLoaded = (index: number) => {
    return () => {
      const activeIndex = this.state.activeCountryIndex
      const country = this.context.countries[activeIndex] as Country
      const consultantsCount = country.consultants.filter(c => c).length

      this.flags = this.flags | Math.pow(2, index)

      if (this.flags === Math.pow(2, consultantsCount) - 1) {
        this.setState({isLoading: false})
      }
    }
  }

  renderCountries = () => {
    return this.context.status === 'READY'
      ? this.context.countries.map(this.renderCountry)
      : null
  }

  renderCountry = (country: Country, index: number) => {
    const active = index === this.state.activeCountryIndex
      ? {'data-active': ''}
      : {}

    return (
      <a
        key={country.id}
        href="#"
        className={styles.navLink}
        onClick={this.onNavClick(index)}
        {...active}
      >
        {country.name}
      </a>
    )
  }

  renderConsultants = () => {
    const {countries, status} = this.context
    if (status !== 'READY') return null

    const consultants = [
      ...countries[this.state.activeCountryIndex].consultants,
      null, null, null, null,
    ]

    return consultants.slice(0, 4).map(this.renderConsultant)
  }

  renderConsultant = (consultant: Consultant | null, index: number) => {
    const {activeCountryIndex, isLoading} = this.state
    const country = this.context.countries[activeCountryIndex]

    return (
      <div
        key={index}
        className={styles.card}
        onLoad={this.cardLoaded(index)}
        {...(isLoading ? {'data-loading': ''} : {})}
      >
        {consultant && (
          <Fragment>
            <img
              src={consultant.image}
              alt={consultant.name}
              title={consultant.name}
            />
            <h3>{consultant.name}</h3>
            <p>
              {consultant.company.name}<br />
              {consultant.company.street}<br />
              {consultant.company.city}<br />
              {country.name}
            </p>
            <p>
              <img src={iconPhone} alt="Phones" />
              {consultant.phones}
            </p>
            <p>
              <img src={iconEmail} alt="Email" />
              <a href={`mailto:${consultant.email}`}>{consultant.email}</a>
            </p>
            <p>
              <img src={iconLinkedIn} alt="LinkedIn" />
              <a href={consultant.link} target="_blank">LinkedIn profile</a>
            </p>
          </Fragment>
        )}
      </div>
    )
  }

  render() {
    return (
      <Section className={styles.section}>
        <Container className={styles.container}>
          <h2>Consultants by Country</h2>
          <p>Sigma Search Partners:</p>

          <nav className={styles.nav}>
            {this.renderCountries()}
          </nav>

          <div className={styles.cards}>
            {this.renderConsultants()}
          </div>
        </Container>
      </Section>
    )
  }
}
