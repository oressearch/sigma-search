import React from 'react'

import Animation from '../../Animation'
import Container from '../../Container'
import Section, {State} from '../../Section'

// @ts-ignore
import styles from './styles.styl'

import './animations/schema'

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
          <h1>What we do</h1>
        </Container>

        <Animation
          name="schema"
          composition="75E0C7C39499C6409F115355863EC006"
          isVisible={this.state.isVisible}
        />
      </Section>
    )
  }
}
