import React, {MouseEvent} from 'react'

import ScrollToTop from '../ScrollToTop'

import ConsultantsByCountry from './ConsultantsByCountry'
import Contact from './Contact'
import ContactByCountry from './ContactByCountry'

import benelux from './images/Benelux.jpeg'
import czechRepublic from './images/Czech Republic.jpeg'
import france from './images/France.jpeg'
import germany from './images/Germany.jpeg'
import spain from './images/Spain.jpeg'
import usa from './images/USA.jpeg'
import c1 from './images/Loek Vandebroek.jpeg'
import c2 from './images/Barbora Tomšovská.jpeg'
import c3 from './images/Petr Zit.jpeg'
import c4 from './images/Ivana Votočková.jpeg'
import c5 from './images/Jiřina Kořínková.jpeg'
import c6 from './images/Cyril Accard.jpeg'
import c7 from './images/Agnès Saugeron-Daube.jpeg'
import c8 from './images/Gilles Herreman.jpeg'
import c9 from './images/Henri Floret.jpeg'
import c10 from './images/Hervé Boyart.jpeg'
import c11 from './images/Klaus Saller.jpeg'
import c12 from './images/Elena Enríquez de Salamanca.jpeg'
import c13 from './images/Francisco Álvarez.jpeg'
import c14 from './images/Noelia Matías.jpeg'

export const IMAGES = {
  "Benelux": benelux,
  "Czech Republic": czechRepublic,
  "France": france,
  "Germany": germany,
  "Spain": spain,
  "USA": usa,
  "Loek Vandebroek": c1,
  "Barbora Tomšovská": c2,
  "Petr Zit": c3,
  "Ivana Votočková": c4,
  "Jiřina Kořínková": c5,
  "Cyril Accard": c6,
  "Agnès Saugeron-Daube": c7,
  "Gilles Herreman": c8,
  "Henri Floret": c9,
  "Hervé Boyart": c10,
  "Klaus Saller": c11,
  "Elena Enríquez de Salamanca": c12,
  "Francisco Álvarez": c13,
  "Noelia Matías": c14,
}

// ----------------------------------------------------------------- # Private #

interface State {
  activeCountryIndex: number
  isLoading: boolean,
}

// ------------------------------------------------------------------ # Public #

export interface Props {
  activeCountryIndex: number
  isLoading: boolean
  onCountryClick: (index: number) => (e: MouseEvent<HTMLAnchorElement> | null) => void
  setLoading: (loading: boolean) => void
}

export default class extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      activeCountryIndex: 0,
      isLoading: false,
    }
  }

  setLoading = (isLoading: boolean) => {
    return this.setState({isLoading})
  }

  onCountryClick = (index: number) => {
    return (event: MouseEvent<HTMLAnchorElement> | null) => {
      if (event) {
        event.preventDefault()
      }

      if (index !== this.state.activeCountryIndex) {
        this.setState({
          activeCountryIndex: index,
          isLoading: true,
        })
      }
    }
  }

  render() {
    const props = {
      ...this.state,
      onCountryClick: this.onCountryClick,
      setLoading: this.setLoading,
    }

    return (
      <ScrollToTop>
        <Contact {...props} />
        <ConsultantsByCountry {...props} />
        <ContactByCountry {...props} />
      </ScrollToTop>
    )
  }
}
