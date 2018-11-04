import React from 'react'

import Animation from '../../Animation'
import Container from '../../Container'

// @ts-ignore
import styles from './styles.styl'

import './animations/carte2'

// ------------------------------------------------------------------ # Public #

export default function OurCapability() {
  return (
    <section className={styles.section}>
      <Animation
        hasResources
        isBackground
        composition="75E0C7C39499C6409F115355863EC005"
        name="carte2"
      />

      <Container className={styles.container}>
        <div className={styles.content}>
          <h2>Our International Capability</h2>
          <p>
            Sigma Search Partners offers companies:
          </p>

          <ul className={styles.content}>
            <li>
              The benefit of local specialised searches by successful and
              experienced consultants.
            </li>
            <li>
              The capability to undertake international, multi-country searches
              involving two or more partners. Such successful multi-country
              collaboration has been a feature of Sigma Search Partners&apos;
              offering to clients from the outset.
            </li>
            <li>
              An assurance that throughout the partnership there is a common
              commitment to provide the highest quality solutions to clients’
              recruitment needs.
            </li>
            <li>
              The opportunity for clients to develop close ties with search
              consultants in all the countries in which the partnership has a
              presence.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
