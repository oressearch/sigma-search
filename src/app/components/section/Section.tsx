import React from 'react'
import Waypoint from 'react-waypoint'

// @ts-ignore
import styles from './Section.styl'

// ----------------------------------------------------------------- # Private #

interface Props {
  className?: string
}

interface State {
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
  }

  renderDataVisible() {
    const isVisible = this.state.isVisible
      ? {'data-visible': ''}
      : {}

    return {...isVisible}
  }

  render() {
    const classNames = [styles.section]

    if (this.props.className) {
      classNames.push(this.props.className)
    }

    return (
      <Waypoint onEnter={this.onEnter} bottomOffset={100}>
        <section
          className={classNames.join(' ')}
          {...this.renderDataVisible()}
        >
          {this.props.children}
        </section>
      </Waypoint>
    )
  }
}
