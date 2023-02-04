import React, {Fragment} from 'react'

import AppContext from '../../App/context'

import Container from '../../Container'
import Section from '../../Section'
import {Props} from '../index'

import {Consultant, Country} from '../../../functions/countries'

// @ts-ignore
import styles from './styles.styl'

// @ts-ignore
import loader from '../../App/images/loader.gif'
// @ts-ignore
import iconEmail from './images/iconEmail.png'
// @ts-ignore
import iconLinkedIn from './images/iconLinkedIn.png'
// @ts-ignore
import iconPhone from './images/iconPhone.png'
// @ts-ignore
import iconWebsite from './images/iconWebsite.png'

// ------------------------------------------------------------------ # Public #

export default class extends React.Component<Props, {}> {
  static contextType = AppContext
  flags: number = 0b00000

  onCountryClick(index: number) {
    this.flags = 0b00000
    return this.props.onCountryClick(index)
  }

  cardLoaded = (index: number) => {
    return () => {
      const activeIndex = this.props.activeCountryIndex
      const country = this.context.countries[activeIndex] as Country
      const consultantsCount = country.consultants.filter(c => c).length

      this.flags = this.flags | Math.pow(2, index)

      if (this.flags === Math.pow(2, consultantsCount) - 1) {
        this.props.setLoading(false)
      }
    }
  }

  renderCountries = () => {
    return this.context.status === 'READY'
      ? this.context.countries.map(this.renderCountry)
      : null
  }

  renderCountry = (country: Country, index: number) => {
    const active =
      index === this.props.activeCountryIndex ? {'data-active': ''} : {}

    const disabled =
      country.consultants.length === 0 ? {'data-disabled': ''} : {}

    return (
      <a
        key={country.id}
        href="#"
        className={styles.navLink}
        onClick={this.onCountryClick(index)}
        {...active}
        {...disabled}
      >
        {country.name}
      </a>
    )
  }

  renderConsultants = () => {
    const {countries, status} = this.context
    if (status !== 'READY') return null

    const {consultants} = countries[this.props.activeCountryIndex]
    return [...consultants, null, null, null, null, null]
      .slice(0, consultants.length === 5 ? 5 : 4)
      .map(this.renderConsultant)
  }

  renderConsultant = (consultant: Consultant | null, index: number) => {
    const {activeCountryIndex, isLoading} = this.props
    const country = this.context.countries[activeCountryIndex]
      
    return (
	    <div
        key={index}
        className={styles.card}
        {...(isLoading ? {'data-loading': ''} : {})}
	    >
        {consultant && (
		    <Fragment key={consultant.company.street}>
		      <img
			    src={consultant.image}
			    alt={consultant.name}
		        title={consultant.name}
		        onLoad={this.cardLoaded(index)}
		      />
		      <h3>{consultant.name}</h3>
		      <p>
		        {consultant.company.name.split('\n').map((a: string, key: number) => (
		        <a key={key} href={`tel:${a}`}>
			        {a}
			        <br />
		        </a>
		        ))}
		        <br />
		        {consultant.company.street}
			      <br />
			      {consultant.company.city}
		      </p>
		      {consultant.phones.trim().length > 0 && (
            <p>
			        <img src={iconPhone} alt="Phones" />
			        {consultant.phones.split('\n').map((a: string, key: number) => (
			          <a key={key} href={`tel:${a}`}>
				          {a}
				          <br />
			          </a>
			        ))}
		        </p>
          )}
		      <p>
			      <img src={iconEmail} alt="Email" />
			      <a href={`mailto:${consultant.email}`}>{consultant.email}</a>
		      </p>
		      <p>
			      <img src={iconLinkedIn} alt="LinkedIn" />
			      <a href={consultant.link} target="_blank">
			        LinkedIn profile
			      </a>
		      </p>
		      <p>
			      <img src={iconWebsite} alt="Website" />
			      <a href={country.contact.website} target="_blank">
			        {country.contact.website}
			      </a>
		      </p>
		    </Fragment>
        )}
	    </div>
        )
        }

  render() {
    return (
      <Section id="consultants" className={styles.section}>
        <Container className={styles.container}>
          <h2>Consultants by Country</h2>
          <p>Sigma Search Partners:</p>

          <nav className={styles.nav}>{this.renderCountries()}</nav>

          <div className={styles.cards}>
            {this.props.isLoading && (
              <div className={styles.loaderContainer}>
                <img className={styles.loader} src={loader} alt="Loading ..." />
              </div>
            )}

            {this.renderConsultants()}
          </div>
        </Container>
      </Section>
    )
  }
}
