import React from 'react'
import {render} from 'react-dom'
import smoothscroll from 'smoothscroll-polyfill'

import App from './components/App'

smoothscroll.polyfill()

render(
  <App />,
  document.getElementById('app') || document.body,
)
