import React, {Fragment} from 'react'
import {render} from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'
import WhatWeDo from './components/WhatWeDo'

import './base.styl'

render(
  <HashRouter>
    <Fragment>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/what-we-do" component={WhatWeDo} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </Fragment>
  </HashRouter>,
  document.getElementById('app') || document.body,
)
