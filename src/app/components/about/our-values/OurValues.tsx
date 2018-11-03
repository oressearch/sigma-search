import React, {Fragment} from 'react'

import Container from '../../container'

// @ts-ignore
import styles from './OurValues.styl'

// ------------------------------------------------------------------ # Public #

export default function OurValues() {
  return (
    <Fragment>
      <div className={styles.frame} />
      <section className={styles.section}>
        <Container className={styles.container}>
          <h2>Our values</h2>
          <p>
            In all our business dealings Sigma Search Partners adhere to a
            strict code of practice. We:
          </p>

          <div className={styles.content}>
            <ul>
              <li>
                Only accept assignments which we are confident we can deliver
                to an excellent standard
              </li>
              <li>
                Guarantee that all data on the client company are handled with
                complete confidentiality
              </li>
              <li>
                Present candidate information in confidence only after
                interviewing and/or with the permission of the individual
                involved
              </li>
              <li>
                Introduce a candidate to only one client at a time
              </li>
            </ul>

            <ul>
              <li>
                Keep the client and candidates informed of the progress of a
                search assignment
              </li>
              <li>
                Follow up the appointment to confirm that both the appointed
                executive and the client are satisfied
              </li>
              <li>
                Do not represent job seekers. Sigma Search Partners give
                informal advice to job seekers and candidates but act only for
                the client companies which retain us
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </Fragment>
  )
}
