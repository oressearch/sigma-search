import 'es5-shim/es5-sham'
import 'es5-shim/es5-shim'
import 'flexibility'
import 'ie-array-find-polyfill'
import 'promise-polyfill/src/polyfill'

import React from 'react'
import {render} from 'react-dom'
import smoothscroll from 'smoothscroll-polyfill'

import App from './components/App'

smoothscroll.polyfill()

render(
  <App />,
  document.getElementById('app') || document.body,
)
