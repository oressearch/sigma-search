import React, {Fragment} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import About from './components/about'
import Contact from './components/contact'
import Home from './components/home'
import WhatWeDo from './components/what-we-do'

import Nav from './components/nav'

import './App.styl'

export default function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Nav />

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/what-we-do" component={WhatWeDo} />
        <Route exact path="/contact" component={Contact} />
      </Fragment>
    </BrowserRouter>
  )
}
