import React from 'react'
import {Link} from 'react-router-dom'

// @ts-ignore
import styles from './styles.styl'

// ----------------------------------------------------------------- # Private #

interface State {
  accepted: boolean
}

// ------------------------------------------------------------------ # Public #

export default class extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      accepted: false,
    }
  }

  accept = () => {
    localStorage.setItem('policy', JSON.stringify('true'))
    this.setState({accepted: true})
  }

  componentDidMount() {
    const accepted = JSON.parse(localStorage.getItem('policy') || 'false')
    this.setState({accepted})
  }

  render() {
    if (this.state.accepted) return null

    return (
      <div className={styles.banner}>
        This website uses Cookies.
        <button onClick={this.accept}>OK</button>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    )
  }
}
