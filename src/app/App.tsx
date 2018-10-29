import React, {Fragment} from 'react'
import {BrowserRouter, HashRouter, Route} from 'react-router-dom'

import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import WhatWeDo from './components/WhatWeDo'

// tslint:disable-next-line:variable-name
const Router = process.env.NODE_ENV === 'production'
  ? HashRouter
  : BrowserRouter

// ------------------------------------------------------------------ # Public #

export default function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/what-we-do" component={WhatWeDo} />
        <Route exact path="/contact" component={Contact} />
      </Fragment>
    </BrowserRouter>
  )
}
