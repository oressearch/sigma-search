import React, {Fragment, MouseEvent} from 'react'

import Container from '../../container'
import Section from '../../section'

// @ts-ignore
import styles from './ExecutiveSearch.styl'

// @ts-ignore
import icon1Active from './images/icon-1.active.png'
// @ts-ignore
import icon1 from './images/icon-1.png'
// @ts-ignore
import icon2Active from './images/icon-2.active.png'
// @ts-ignore
import icon2 from './images/icon-2.png'
// @ts-ignore
import icon3Active from './images/icon-3.active.png'
// @ts-ignore
import icon3 from './images/icon-3.png'
// @ts-ignore
import icon4Active from './images/icon-4.active.png'
// @ts-ignore
import icon4 from './images/icon-4.png'
// @ts-ignore
import icon5Active from './images/icon-5.active.png'
// @ts-ignore
import icon5 from './images/icon-5.png'
// @ts-ignore
import icon6Active from './images/icon-6.active.png'
// @ts-ignore
import icon6 from './images/icon-6.png'

// ----------------------------------------------------------------- # Private #

interface State {
  activeItem: number
}

interface Item {
  id: number
  label: JSX.Element
  icon: string
  iconActive: string
}

const items = [
  {id: 1, icon: icon1, iconActive: icon1Active, label: <Fragment>Thorough<br />understanding ...</Fragment>},
  {id: 2, icon: icon2, iconActive: icon2Active, label: <Fragment>Identify<br />targets ...</Fragment>},
  {id: 3, icon: icon3, iconActive: icon3Active, label: <Fragment>Meet and<br />Evaluate ...</Fragment>},
  {id: 4, icon: icon4, iconActive: icon4Active, label: <Fragment>Facilitate<br />process ...</Fragment>},
  {id: 5, icon: icon5, iconActive: icon5Active, label: <Fragment>Take up<br />references ...</Fragment>},
  {id: 6, icon: icon6, iconActive: icon6Active, label: <Fragment>Help<br />on-boarding ...</Fragment>},
] as Item[]

// ------------------------------------------------------------------ # Public #

export default class ExecutiveSearch extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      activeItem: 1,
    }
  }

  onItemClick = (activeItem: number) => (
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      this.setState({activeItem})
    }
  )

  renderItemProps(key: number) {
    const className = styles.link
    const isActive = this.state.activeItem === key
      ? {'data-active': ''}
      : {}

    return {
      className,
      key,
      onClick: this.onItemClick(key),
      ...isActive,
    }
  }

  renderIconProps(item: Item) {
    const src = this.state.activeItem === item.id
      ? item.iconActive
      : item.icon

    return {
      alt: '',
      src,
    }
  }

  render() {
    return (
      <Section className={styles.section}>
        <Container>
          <h2>Executive Search</h2>
          <p>
            The objective of each search assignment is to provide client
            organisations with suitably qualified executives to fill a position
            in the client’s organisation. In order to do this effectively, the
            retained search consultant will:
          </p>

          <nav className={styles.nav}>
            {items.map(item => (
              <div className={styles.item}>
                <a {...this.renderItemProps(item.id)}>
                  <img {...this.renderIconProps(item)} />
                  {item.label}
                </a>
              </div>
            ))}
          </nav>
        </Container>
      </Section>
    )
  }
}
