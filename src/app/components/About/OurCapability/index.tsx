import React from 'react'

import Container from '../../Container'

// @ts-ignore
import styles from './styles.styl'

// @ts-ignore
import pin from './images/pin.svg'

// ------------------------------------------------------------------ # Public #

export default function OurCapability() {
  const renderPin = (color: string) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 165.3 203.2"
      width={24}
      height={24}
    >
      <path
        fill={color}
        d="M83.7,1.3C39.2,1.3,3.1,37.3,3.1,81.8c0,44.5,80.6,117.2,80.6,117.2s80.6-72.7,80.6-117.2 C164.3,37.3,128.2,1.3,83.7,1.3z M83.7,114.8c-18.2,0-33-14.8-33-33c0-18.2,14.8-33,33-33c18.2,0,33,14.8,33,33 C116.7,100.1,101.9,114.8,83.7,114.8z"
      />
    </svg>
  )

  return (
    <section id="our-capability" className={styles.section}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2>Our International Capability</h2>
          <p>Sigma Search Partners offers companies:</p>

          <ul className={styles.list}>
            <li>
              {renderPin('#0aa1ac')}
              <div>
                The benefit of local specialised searches by successful and
                experienced consultants.
              </div>
            </li>
            <li>
              {renderPin('#e93a45')}
              <div>
                The capability to undertake international, multi-country
                searches involving two or more partners. Such successful
                multi-country collaboration has been a feature of Sigma Search
                Partners&apos; offering to clients from the outset.
              </div>
            </li>
            <li>
              {renderPin('#fe9544')}
              <div>
                An assurance that throughout the partnership there is a common
                commitment to provide the highest quality solutions to clients’
                recruitment needs.
              </div>
            </li>
            <li>
              {renderPin('#cca57f')}
              <div>
                The opportunity for clients to develop close ties with search
                consultants in all the countries in which the partnership has a
                presence.
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
