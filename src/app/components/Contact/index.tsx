import React, {MouseEvent} from 'react'

import ScrollToTop from '../ScrollToTop'

import ConsultantsByCountry from './ConsultantsByCountry'
import Contact from './Contact'
import ContactByCountry from './ContactByCountry'

// ----------------------------------------------------------------- # Private #

interface State {
  activeCountryIndex: number
  isLoading: boolean,
}

// ------------------------------------------------------------------ # Public #

export interface Props {
  activeCountryIndex: number
  isLoading: boolean
  onCountryClick: (index: number) => (e: MouseEvent<HTMLAnchorElement>) => void
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
    return (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      this.setState({
        activeCountryIndex: index,
        isLoading: true,
      })
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
        <Contact />
        <ConsultantsByCountry {...props} />
        <ContactByCountry {...props} />
      </ScrollToTop>
    )
  }
}
