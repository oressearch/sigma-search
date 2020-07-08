import React from 'react'

import Animation from '../../Animation'

// @ts-ignore
import styles from './styles.styl'

import './animations/carte2'

// @ts-ignore
import india from './animations/medaillon2.gif'

// ------------------------------------------------------------------ # Public #

export default function SelectCountry() {
  return (
    <section id="select-country" className={styles.section}>
      <img
        className={styles.img}
        src={india}
        onClick={() => window.open(`/contact?index=6`, '_self')}
        alt=""
      />

      <Animation
        className={styles.anim}
        hasResources
        isBackground
        composition="75E0C7C39499C6409F115355863EC005"
        name="carte2"
      />
    </section>
  )
}
