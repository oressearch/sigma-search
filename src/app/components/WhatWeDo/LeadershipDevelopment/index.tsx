import React from 'react'

import Container from '../../Container'
import Section from '../../Section'

// @ts-ignore
import styles from './styles.styl'

// @ts-ignore
import corner from './images/corner.png'
// @ts-ignore
import flagCZ from './images/flag-cz.png'
// @ts-ignore
import flagDE from './images/flag-de.png'
// @ts-ignore
import flagFR from './images/flag-fr.png'
// @ts-ignore
import flagGB from './images/flag-gb.png'
// @ts-ignore
import flagUS from './images/flag-us.png'
// @ts-ignore
import iconLeadershipDevelopment from './images/icon-leadership-development.png'
// @ts-ignore
import iconOrganisationConsultancy from './images/icon-organisation-consultancy.png'

// ------------------------------------------------------------------ # Public #

export default function LeadershipDevelopment() {
  return (
    <Section id="leadership-development" className={styles.section}>
      <img className={styles.corner} src={corner} alt="" />
      <Container>
        <h2>
          Leadership Development <br />
          &amp; Organisation Consultancy
        </h2>
        <p />

        <div className={styles.content}>
          <div className={styles.leftSide}>
            <h3>
              <img src={iconLeadershipDevelopment} alt="" />
              Leadership Development
            </h3>
            <p>
              Sigma Search Partners offer advice and consultancy to corporations
              on creating and implementing an education and leadership
              development capability that is aligned with the company's goals
              and objectives, including:
            </p>
            <ul>
              <li>
                The definition of the processes whereby leadership development
                is aligned with talent pool planning, succession planning and
                building corporate bench strength for leadership roles.
              </li>
              <li>
                The definition of the framework, plans and processes for the
                development and coaching of effective leaders for the business.
              </li>
            </ul>
            <p>
              These Services are offered mainly by partners in Germany, Italy,
              France, UK and the USA; further details are available on their
              respective web sites.
            </p>

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
                <img src={flagGB} alt="" />
                <a
                  href="http://www.simmondsinternational.com/"
                  target="_blank"
                  rel="author noopener"
                >
                  www.simmondsinternational.com
                </a>
              </li>
              <li>
                <img src={flagUS} alt="" />
                <a
                  href="https://www.leanhrconsult.com/"
                  target="_blank"
                  rel="author noopener"
                >
                  www.leanhrconsult.com
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

          <div className={styles.rightSide}>
            <h3>
              <img src={iconOrganisationConsultancy} alt="" />
              Organisation Consultancy
            </h3>
            <p>
              Sigma Search Partners provide guidance to corporate general
              management on building an organisational capability to meet the
              corporation’s goals and objectives including:
            </p>
            <ul>
              <li>
                Definition of the optimal organisation and leadership skills and
                abilities required to meet the goals and objectives.
              </li>
              <li>
                Creation of a talent management framework that includes
                executive assessment, coaching and development planning,
                succession planning and executive hiring and selection models
                that will ensure the right people, processes and structure are
                in place to produce and maintain excellent business results.
              </li>
            </ul>
            <p>
              These Services are offered mainly by partners in Germany, Italy,
              France, UK and the USA; further details are available on their
              respective web sites.
            </p>

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
                <img src={flagGB} alt="" />
                <a
                  href="http://www.simmondsinternational.com/"
                  target="_blank"
                  rel="author noopener"
                >
                  www.simmondsinternational.com
                </a>
              </li>
              <li>
                <img src={flagUS} alt="" />
                <a
                  href="https://www.leanhrconsult.com/"
                  target="_blank"
                  rel="author noopener"
                >
                  www.leanhrconsult.com
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
        </div>
      </Container>
    </Section>
  )
}
