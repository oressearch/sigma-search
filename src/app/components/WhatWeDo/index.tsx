import React from 'react'

import ScrollToTop from '../ScrollToTop'
import ExecutiveSearch from './ExecutiveSearch'
import WhatWeDo from './WhatWeDo'

// ------------------------------------------------------------------ # Public #

export default function WhatWeDo_() {
  return (
    <ScrollToTop>
      <WhatWeDo />
      <ExecutiveSearch />
    </ScrollToTop>
  )
}
