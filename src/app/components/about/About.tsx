import React, {Fragment} from 'react'

import About_ from './about'
import OurCapability from './our-capability'
import OurValues from './our-values'

// ------------------------------------------------------------------ # Public #

export default class About extends React.Component {
  componentDidMount() {
    window.scroll(0, 0)
  }

  render() {
    return (
      <Fragment>
        <About_ />
        <OurValues />
        <OurCapability />
      </Fragment>
    )
  }
}
