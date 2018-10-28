import React from 'react'

// @ts-ignore
import styles from './App.styl'

// ----------------------------------------------------------------- # Private #

interface Props {
  title: string
}

// ------------------------------------------------------------------ # Public #

export default function App(props: Props) {
  return (
    <h1 className={styles.title}>{props.title}</h1>
  )
}
