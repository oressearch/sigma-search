import React, {Fragment} from 'react'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'

import AppContext from '../../App/context'

import Container from '../../Container'
import Section from '../../Section'
import {Props} from '../index'

import {Contact, Country} from '../../../functions/countries'

// @ts-ignore
import styles from './styles.styl'

// @ts-ignore
import iconAddress from './images/iconAddress.png'
// @ts-ignore
import iconEmail from './images/iconEmail.png'
// @ts-ignore
import iconLinkedIn from './images/iconLinkedIn.png'
// @ts-ignore
import iconPhone from './images/iconPhone.png'
// @ts-ignore
import iconWebsite from './images/iconWebsite.png'

// ------------------------------------------------------------------ # Public #

export default class ContactByCountry extends React.Component<Props, {}> {
  static contextType = AppContext

  renderCountries = () => {
    return this.context.status === 'READY'
      ? this.context.countries.map(this.renderCountry)
      : null
  }

  renderCountry = (country: Country, index: number) => {
    const active = index === this.props.activeCountryIndex
      ? {'data-active': ''}
      : {}

    return (
      <a
        key={country.id}
        href="#"
        className={styles.navLink}
        onClick={this.props.onCountryClick(index)}
        {...active}
      >
        {country.name}
      </a>
    )
  }

  renderContact = () => {
    const {countries, status} = this.context
    if (status !== 'READY') return null

    const {activeCountryIndex} = this.props
    const {contact} = countries[activeCountryIndex]

    return (
      <div
        className={styles.background}
        style={{backgroundImage: `url(${contact.image})`}}
      >
        <Container className={styles.content}>
          <div className={styles.info}>
            <img src={iconAddress} alt="" />
            <span>
              {contact.address.split('\n').map((a: string, key: number) => (
                <Fragment key={key}>{a}<br /></Fragment>
              ))}
            </span>
          </div>

          <div className={styles.info}>
            <img src={iconPhone} alt="" />
            <span>
              {contact.phones.split('\n').map((p: string, key: number) => (
                <Fragment key={key}>{p}<br /></Fragment>
              ))}
            </span>
          </div>

          <a className={styles.info} href={`mailto:${contact.linkedin}`}>
            <img src={iconEmail} alt="" />
            <span>{contact.email}</span>
          </a>

          <a className={styles.info} href={contact.website} target="_blank">
            <img src={iconWebsite} alt="" />
            <span>{contact.website}</span>
          </a>

          <a className={styles.info} href={contact.linkedin} target="_blank">
            <img src={iconLinkedIn} alt="" />
            <span>LinkedIn<br />contact</span>
          </a>
        </Container>
      </div>
    )
  }

  renderMap = () => {
    const {countries, status} = this.context
    if (status !== 'READY') return null

    const {activeCountryIndex} = this.props
    const contact = countries[activeCountryIndex].contact as Contact
    const position = [contact.latitude, contact.longitude] as [number, number]

    return (
      <Map center={position} zoom={13} className={styles.map} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>{contact.address}</Popup>
        </Marker>
      </Map>
    )
  }

  render() {
    return (
      <Fragment>
        <Section className={styles.navSection}>
          <Container className={styles.container}>
            <h2>Contact by Country</h2>
            <p>Sigma Search Partners:</p>

            <nav className={styles.nav}>
              {this.renderCountries()}
            </nav>
          </Container>
        </Section>

        <Section className={styles.contactSection}>
          {this.renderContact()}
        </Section>

        <Section>
          {this.renderMap()}
        </Section>
      </Fragment>
    )
  }
}
