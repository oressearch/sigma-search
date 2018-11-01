import React, {Fragment} from 'react'

import AboutUs from './about-us'
import ContactUs from './contact-us'
import GlobalRecruitmentSolutions from './global-recruitment-solutions'
import WhatWeDo from './what-we-do'

// ------------------------------------------------------------------ # Public #

export default function Home() {
  return (
    <Fragment>
      <GlobalRecruitmentSolutions />
      <AboutUs />
      <WhatWeDo />
      <ContactUs />
    </Fragment>
  )
}
