import React, {Fragment} from 'react'

import ExecutiveSearch from './executive-search'
import WhatWeDo_ from './what-we-do'

// ------------------------------------------------------------------ # Public #

export default class WhatWeDo extends React.Component {
  componentDidMount() {
    window.scroll(0, 0)
  }

  render() {
    return (
      <Fragment>
        <WhatWeDo_ />
        <ExecutiveSearch />
      </Fragment>
    )
  }
}
