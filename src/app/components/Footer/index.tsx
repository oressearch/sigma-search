import React from 'react'
import {Link} from 'react-router-dom'

import Container from '../Container'

// @ts-ignore
import styles from './styles.styl'

// @ts-ignore
import logo from './images/logo.png'
// @ts-ignore
import map from './images/map.png'

// ------------------------------------------------------------------ # Public #

function onClick() {
  window.scrollTo({
    behavior: 'smooth',
    top: 0,
  })
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <section className={styles.map}>
          <img src={logo} alt="" />
          <h4>Global Recruitment Solutions</h4>

          <img src={map} alt="" />
          <p>
            Dublin - London - Madrid - Milan - Munich - <br />
            Paris - Prague - USA - Warsaw
          </p>
        </section>

        <nav className={styles.nav}>
          <div>
            <h5><Link to="/" onClick={onClick}>Home</Link></h5>
          </div>

          <div>
            <h5><Link to="/about" onClick={onClick}>About us</Link></h5>
            <ul>
              <li>
                <Link to="/about#our-values" onClick={onClick}>Our values</Link>
              </li>
              <li>
                <Link to="/about#our-capability" onClick={onClick}>Our International capability</Link>
              </li>
            </ul>
          </div>

          <div>
            <h5><Link to="/what-we-do" onClick={onClick}>What we do</Link></h5>
            <ul>
              <li>
                <Link to="/what-we-do#executive-search" onClick={onClick}>Executive Search</Link>
              </li>
              <li>
                <Link to="/what-we-do#cross-border" onClick={onClick}>Cross Border Search</Link>
              </li>
              <li>
                <Link to="/what-we-do#leadership-development" onClick={onClick}>
                  Leadership Development <br />
                  &amp; Organisation Consultancy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5><Link to="/contact" onClick={onClick}>Contact</Link></h5>
            <ul>
              <li>
                <Link to="/contact#consultants" onClick={onClick}>Consultants by country</Link>
              </li>
              <li>
                <Link to="/contact#consultants" onClick={onClick}>Contact by country</Link>
              </li>
            </ul>
          </div>
        </nav>

        <aside className={styles.credits}>
          <h5>Legal Disclaimers</h5>
          <p><Link to="/privacy-policy" onClick={onClick}>Privacy Policy</Link></p>
          <h5>Imprint</h5>
          <h5>Webdesign</h5>
          <p>
            Design:{' '}
            <a
              href="http://dogms.com/"
              target="_blank"
              rel="author noopener"
            >
              www.dogms.com
            </a>
          </p>
          <p>
            Development:{' '}
            <a
              href="https://soywod.com"
              target="_blank"
              rel="author noopener"
            >
              Clément DOUIN
            </a>
          </p>
        </aside>
      </Container>
    </footer>
  )
}
