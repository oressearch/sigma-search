import React from 'react'

import ScrollToTop from '../ScrollToTop'
import About from './About'
import OurCapability from './OurCapability'
import OurTeam from './OurTeam'
import OurValues from './OurValues'
import SelectCountry from './SelectCountry'

// ------------------------------------------------------------------ # Public #

export default function About_() {
  return (
    <ScrollToTop>
      <About />
      <OurValues />
      <OurTeam />
      <OurCapability />
      <SelectCountry />
    </ScrollToTop>
  )
}
