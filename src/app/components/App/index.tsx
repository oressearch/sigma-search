import React from 'react'
import {HashRouter, Route} from 'react-router-dom'

import Context, {Context as State, defaultContext} from './context'

import About from '../About'
import Contact from '../Contact'
import Footer from '../Footer'
import Home from '../Home'
import Nav from '../Nav'
import WhatWeDo from '../WhatWeDo'

import {fetchCountries} from '../../functions/countries'

import './styles.styl'

// ------------------------------------------------------------------ # Public #

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = defaultContext
  }

  componentDidMount() {
    const cache = localStorage.getItem('countries')

    if (cache) {
      this.setState({
        countries: JSON.parse(cache),
        status: 'READY',
      })
    }

    fetchCountries()
      .then(countries => {
        localStorage.setItem(
          'countries',
          JSON.stringify(countries),
        )

        this.setState({
          countries,
          status: 'READY',
        })

        console.log('Cache updated.')
      })
  }

  render() {
    return (
      <HashRouter>
        <Context.Provider value={this.state}>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/what-we-do" component={WhatWeDo} />
          <Route exact path="/contact" component={Contact} />
          <Footer />
        </Context.Provider>
      </HashRouter>
    )
  }
}
