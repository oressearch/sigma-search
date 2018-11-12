import React from 'react'
import Waypoint from 'react-waypoint'

// @ts-ignore
import styles from './styles.styl'

// ----------------------------------------------------------------- # Private #

interface Props {
  className?: string
  id?: string
  onVisible?: () => void
  style?: object
}

export interface State {
  isVisible: boolean
}

// ------------------------------------------------------------------ # Public #

export default class Section extends React.Component<Props, State> {
  section: HTMLElement | null = null

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
    const style = this.props.style || {}

    const id = this.props.id
      ? {id: this.props.id}
      : {}

    const isVisible = this.state.isVisible
      ? {'data-visible': ''}
      : {}

    if (this.props.className) {
      classNames.push(this.props.className)
    }

    return {
      className: classNames.join(' '),
      onLoad: () => this.onLoad(),
      style,
      ...id,
      ...isVisible,
    }
  }

  onLoad() {
    if (! this.section || ! this.props.id) return

    const hashes = window.location.hash.split('#')
    if (hashes.length === 3 && this.props.id === hashes[2]) {
      setTimeout(() => window.scrollTo({
        behavior: 'smooth',
        top: this.section && this.section.offsetTop - 100 || 0,
      }), 400)
    }
  }

  render() {
    return (
      <Waypoint onEnter={this.onEnter} bottomOffset={100}>
        <section ref={ref => this.section = ref} {...this.renderProps()}>
          {this.props.children}
        </section>
      </Waypoint>
    )
  }
}
