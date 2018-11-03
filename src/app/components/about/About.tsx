import React, {Fragment} from 'react'

import About_ from './about'
import OurCapability from './our-capability'
import OurValues from './our-values'

// ------------------------------------------------------------------ # Public #

export default function About() {
  return (
    <Fragment>
      <About_ />
      <OurValues />
      <OurCapability />
    </Fragment>
  )
}
