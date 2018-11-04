import React, {Fragment} from 'react'

// @ts-ignore
import iconActive1 from './images/icon-1.active.png'
// @ts-ignore
import iconBig1 from './images/icon-1.big.png'
// @ts-ignore
import icon1 from './images/icon-1.png'

// @ts-ignore
import iconActive2 from './images/icon-2.active.png'
// @ts-ignore
import iconBig2 from './images/icon-2.big.png'
// @ts-ignore
import icon2 from './images/icon-2.png'

// @ts-ignore
import iconActive3 from './images/icon-3.active.png'
// @ts-ignore
import iconBig3 from './images/icon-3.big.png'
// @ts-ignore
import icon3 from './images/icon-3.png'

// @ts-ignore
import iconActive4 from './images/icon-4.active.png'
// @ts-ignore
import iconBig4 from './images/icon-4.big.png'
// @ts-ignore
import icon4 from './images/icon-4.png'

// @ts-ignore
import iconActive5 from './images/icon-5.active.png'
// @ts-ignore
import iconBig5 from './images/icon-5.big.png'
// @ts-ignore
import icon5 from './images/icon-5.png'

// @ts-ignore
import iconActive6 from './images/icon-6.active.png'
// @ts-ignore
import iconBig6 from './images/icon-6.big.png'
// @ts-ignore
import icon6 from './images/icon-6.png'

// ----------------------------------------------------------------- # Private #

export interface Item {
  id: number
  icon: string
  iconActive: string
  iconBig: string
  navTitle: JSX.Element
  text: JSX.Element
  viewTitle: JSX.Element
}

const ids = [1, 2, 3, 4, 5, 6]

const icons = [
  {icon: icon1, iconActive: iconActive1, iconBig: iconBig1},
  {icon: icon2, iconActive: iconActive2, iconBig: iconBig2},
  {icon: icon3, iconActive: iconActive3, iconBig: iconBig3},
  {icon: icon4, iconActive: iconActive4, iconBig: iconBig4},
  {icon: icon5, iconActive: iconActive5, iconBig: iconBig5},
  {icon: icon6, iconActive: iconActive6, iconBig: iconBig6},
]

const navTitles = [
  <Fragment>Thorough<br />understanding</Fragment>,
  <Fragment>Identify<br />targets</Fragment>,
  <Fragment>Meet and<br />Evaluate</Fragment>,
  <Fragment>Facilitate<br />process</Fragment>,
  <Fragment>Take up<br />references</Fragment>,
  <Fragment>Help<br />on-boarding</Fragment>,
]

const viewTitles = [
  <Fragment>Thorough understanding ...</Fragment>,
  <Fragment>Identify targets ...</Fragment>,
  <Fragment>Meet and Evaluate ...</Fragment>,
  <Fragment>Facilitate process ...</Fragment>,
  <Fragment>Take up references ...</Fragment>,
  <Fragment>Help on-boarding ...</Fragment>,
]

const texts = [
  <Fragment>
    Gain a <strong>thorough understanding</strong> of the client’s
    organisation, the role to be filled and experience and qualities required
    by the person to fit the role and the client company’s culture.
  </Fragment>,
  <Fragment>
    Gain a <strong>thorough understanding</strong> of the client’s
    organisation, the role to be filled and experience and qualities required
    by the person to fit the role and the client company’s culture.
  </Fragment>,
  <Fragment>
    Gain a <strong>thorough understanding</strong> of the client’s
    organisation, the role to be filled and experience and qualities required
    by the person to fit the role and the client company’s culture.
  </Fragment>,
  <Fragment>
    Gain a <strong>thorough understanding</strong> of the client’s
    organisation, the role to be filled and experience and qualities required
    by the person to fit the role and the client company’s culture.
  </Fragment>,
  <Fragment>
    Gain a <strong>thorough understanding</strong> of the client’s
    organisation, the role to be filled and experience and qualities required
    by the person to fit the role and the client company’s culture.
  </Fragment>,
  <Fragment>
    Gain a <strong>thorough understanding</strong> of the client’s
    organisation, the role to be filled and experience and qualities required
    by the person to fit the role and the client company’s culture.
  </Fragment>,
]

// ------------------------------------------------------------------ # Public #

const items = ids.map((id, index) => ({
  id,
  navTitle: navTitles[index],
  text: texts[index],
  viewTitle: viewTitles[index],
  ...icons[index],
}))

export default items as Item[]
