import React from 'react'

import ScrollToTop from '../ScrollToTop'
import CrossBorderSearch from './CrossBorderSearch'
import ExecutiveSearch from './ExecutiveSearch'
import LeadershipDevelopment from './LeadershipDevelopment'
import WhatWeDo from './WhatWeDo'

// ------------------------------------------------------------------ # Public #

export default function WhatWeDo_() {
  return (
    <ScrollToTop>
      <WhatWeDo />
      <ExecutiveSearch />
      <CrossBorderSearch />
      <LeadershipDevelopment />
    </ScrollToTop>
  )
}
