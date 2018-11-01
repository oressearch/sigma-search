import React, {Fragment} from 'react'

import About from './about'
import Contact from './contact'
import GlobalRecruitmentSolutions from './global-recruitment-solutions'
import WhatWeDo from './what-we-do'

// ------------------------------------------------------------------ # Public #

export default function Home() {
  return (
    <Fragment>
      <GlobalRecruitmentSolutions />
      <About />
      <WhatWeDo />
      <Contact />
    </Fragment>
  )
}
