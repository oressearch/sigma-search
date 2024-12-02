import React from 'react'

import Container from '../../Container'
import Section from '../../Section'

// @ts-ignore
import styles from './styles.styl'

// @ts-ignore
import flagCZ from './images/flag-cz.png'
// @ts-ignore
import flagDE from './images/flag-de.png'
// @ts-ignore
import flagFR from './images/flag-fr.png'

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

            <ul className={styles.countries}>
              <li>
                <img src={flagDE} alt="" />
                <a
                  href="https://www.odigos.de/index.php/en/your-human-resource-partner/"
                  target="_blank"
                  rel="author noopener"
                >
                  www.odigos.de
                </a>
              </li>
              <li>
                <img src={flagFR} alt="" />
                <a
                  href="http://www.oressearch.com/"
                  target="_blank"
                  rel="author noopener"
                >
                  www.oressearch.com
                </a>
              </li>
              <li>
                <img src={flagCZ} alt="" />
                <a
                  href="http://www.touchdown.cz/"
                  target="_blank"
                  rel="author noopener"
                >
                  www.touchdown.cz
                </a>
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
