import React from 'react'

import Animation from '../../Animation'
import Container from '../../Container'
import Section, {State} from '../../Section'

// @ts-ignore
import styles from './styles.styl'

import './animations/schemahome'

// ------------------------------------------------------------------ # Public #

export default class WhatWeDo extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  onVisible = () => {
    this.setState({isVisible: true})
  }

  render() {
    return (
      <Section className={styles.section} onVisible={this.onVisible}>
        <Container>
          <h2>What we do</h2>
        </Container>

        <Animation
          name="schemahome"
          composition="75E0C7C39499C6409F115355863EC004"
          isVisible={this.state.isVisible}
        />
      </Section>
    )
  }
}
