import React, {Fragment} from 'react'
import {HashRouter, Route} from 'react-router-dom'

import About from '../About'
import Contact from '../Contact'
import Footer from '../Footer'
import Home from '../Home'
import Nav from '../Nav'
import WhatWeDo from '../WhatWeDo'

import './styles.styl'

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/what-we-do" component={WhatWeDo} />
          <Route exact path="/contact" component={Contact} />
          <Footer />
        </Fragment>
      </HashRouter>
    )
  }
}
