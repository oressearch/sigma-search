import React from 'react'

// ------------------------------------------------------------------ # Public #

export default class ScrollToTop extends React.Component {
  componentDidMount() {
    window.scroll(0, 0)
  }

  render() {
    return this.props.children
  }
}
