import React from 'react'

import ScrollToTop from '../ScrollToTop'
import About from './About'
import OurCapability from './OurCapability'
import OurValues from './OurValues'

// ------------------------------------------------------------------ # Public #

export default function About_() {
  return (
    <ScrollToTop>
      <About />
      <OurValues />
      <OurCapability />
    </ScrollToTop>
  )
}
