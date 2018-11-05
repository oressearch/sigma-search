import React from 'react'

import ScrollToTop from '../ScrollToTop'

import ConsultantsByCountry from './ConsultantsByCountry'
import Contact from './Contact'
/* import ContactByCountry from './ContactByCountry' */

// ------------------------------------------------------------------ # Public #

export default function Contact_() {
  return (
    <ScrollToTop>
      <Contact />
      <ConsultantsByCountry />
    </ScrollToTop>
  )
}
