import React, {MouseEvent} from 'react'

import Container from '../../Container'
import Section from '../../Section'

import items, {Item} from './items'

// @ts-ignore
import styles from './styles.styl'

// @ts-ignore
import corner from './images/corner.png'

// ----------------------------------------------------------------- # Private #

interface State {
  itemActive: number
}

// ------------------------------------------------------------------ # Public #

export default class ExecutiveSearch extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = {
      itemActive: 1,
    }
  }

  onItemClick = (itemActive: number) => (
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      this.setState({itemActive})
    }
  )

  renderNavItemProps(key: number) {
    const className = styles.navItemLink
    const isActive = this.state.itemActive === key
      ? {'data-active': ''}
      : {}

    return {
      className,
      key,
      onClick: this.onItemClick(key),
      ...isActive,
    }
  }

  renderNavIconProps(item: Item) {
    const src = this.state.itemActive === item.id
      ? item.iconActive
      : item.icon

    return {
      alt: '',
      src,
    }
  }

  renderItemViewProps(item: Item) {
    const className = styles.viewItem
    const key = item.id
    const isActive = this.state.itemActive === item.id
      ? {'data-active': ''}
      : {}

    return {
      className,
      key,
      ...isActive,
    }
  }

  render() {
    return (
      <Section id="executive-search" className={styles.section}>
        <img className={styles.corner} src={corner} alt="" />
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
              <div key={item.id} className={styles.navItem}>
                <a {...this.renderNavItemProps(item.id)}>
                  <img {...this.renderNavIconProps(item)} />
                  <span className={styles.navTitle}>
                    {item.navTitle}
                  </span>
                </a>
              </div>
            ))}

            <div className={styles.view}>
              {items.map(item => (
                <div {...this.renderItemViewProps(item)}>
                  <img className={styles.viewIcon} src={item.iconBig} alt="" />
                  <div className={styles.viewContent}>
                    <h3 className={styles.viewTitle}>
                      {item.viewTitle}
                    </h3>
                    <p>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </nav>

        </Container>
      </Section>
    )
  }
}
