import React from 'react'

import Animation from './Animation'
import Container from './Container'

import '../animations/home/carte1.js'

// ------------------------------------------------------------------ # Public #

export default function Home() {
  return (
    <Animation name="carte1" composition="75E0C7C39499C6409F115355863EC003">
      <Container>
        <h1>
          Global<br />
          Recruitment<br />
          Solutions
        </h1>

        <p>
          Our independent boutique search firms <br />
          across international markets.
        </p>
      </Container>
    </Animation>
  )
}
