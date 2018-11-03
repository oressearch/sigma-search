import React, {Fragment} from 'react'

import About from './about'
import Contact from './contact'
import GlobalRecruitmentSolutions from './global-recruitment-solutions'
import WhatWeDo from './what-we-do'

// ------------------------------------------------------------------ # Public #

export default class Home extends React.Component {
  componentDidMount() {
    window.scroll(0, 0)
  }

  render() {
    return (
      <Fragment>
        <GlobalRecruitmentSolutions />
        <About />
        <WhatWeDo />
        <Contact />
      </Fragment>
    )
  }
}
