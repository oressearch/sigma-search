import React from 'react'

import Container from '../../Container'
import Section from '../../Section'

// @ts-ignore
import styles from './styles.styl'

// @ts-ignore
import background from './images/background.png'
// @ts-ignore
import corner from './images/corner.png'

// ------------------------------------------------------------------ # Public #

export default function CrossBorderSearch() {
  return (
    <Section id="cross-border" className={styles.section}>
      <img className={styles.corner} src={corner} alt="" />
      <Container>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>Cross Border Search</h2>
            <p>Sigma Search Partners:</p>

            <ul className={styles.list}>
              <li className={styles.item}>
                Handle assignments in one or more countries according to the
                requirements of the client organisation
              </li>

              <li className={styles.item}>
                Provide a practice consultant in each country as appropriate to
                collaborate with the retained consultant in the provision of in
                country support such as research, meeting facilities, taking up
                references in the local language etc
              </li>
            </ul>
          </div>

          <div className={styles.background}>
            <img src={background} alt="" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
