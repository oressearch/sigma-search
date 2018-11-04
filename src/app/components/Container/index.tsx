import React, {ReactNode} from 'react'

// @ts-ignore
import styles from './styles.styl'

// ----------------------------------------------------------------- # Private #

interface Props {
  tag?: string
  className?: object
  children?: ReactNode
}

// ------------------------------------------------------------------ # Public #

export default function Container(props: Props) {
  const tag = props.tag || 'div'
  const {children} = props
  const className = [styles.container, props.className]
    .filter(c => !! c)
    .join(' ')

  return React.createElement(tag, {className}, children)
}
