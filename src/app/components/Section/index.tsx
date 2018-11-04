import React from 'react'
import Waypoint from 'react-waypoint'

// @ts-ignore
import styles from './styles.styl'

// ----------------------------------------------------------------- # Private #

interface Props {
  className?: string
  onVisible?: () => void
}

export interface State {
  isVisible: boolean
}

// ------------------------------------------------------------------ # Public #

export default class Section extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  onEnter = () => {
    this.setState({isVisible: true})

    if (this.props.onVisible) {
      this.props.onVisible()
    }
  }

  renderProps() {
    const classNames = [styles.section]
    const isVisible = this.state.isVisible
      ? {'data-visible': ''}
      : {}

    if (this.props.className) {
      classNames.push(this.props.className)
    }

    return {
      className: classNames.join(' '),
      ...isVisible,
    }
  }

  render() {
    return (
      <Waypoint onEnter={this.onEnter} bottomOffset={100}>
        <section {...this.renderProps()}>
          {this.props.children}
        </section>
      </Waypoint>
    )
  }
}
