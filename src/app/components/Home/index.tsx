import React from 'react'

import ScrollToTop from '../ScrollToTop'
import About from './About'
import Contact from './Contact'
import GlobalRecruitmentSolutions from './GlobalRecruitmentSolutions'
import WhatWeDo from './WhatWeDo'

// ------------------------------------------------------------------ # Public #

export default function Home() {
  return (
    <ScrollToTop>
      <GlobalRecruitmentSolutions />
      <About />
      <WhatWeDo />
      <Contact />
    </ScrollToTop>
  )
}
