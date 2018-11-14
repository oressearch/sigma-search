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
    <strong>Identify target</strong> organisations in which suitably qualified
    potential candidates are likely to be found, and approach the individuals
    who appear to meet the requirements. At the same time the consultant will
    review the relevant data bases and consult practice specialists in other
    partner firms if appropriate.
  </Fragment>,
  <Fragment>
    <strong>Meet and evaluate</strong> interested potential candidates to
    establish their suitability for the client company and the position and
    introduce the most suitable candidates to the client.
  </Fragment>,
  <Fragment>
    Throughout the client’s programme of interviewing candidates,
    <strong>facilitate the process</strong> and act on behalf of the client.
  </Fragment>,
  <Fragment>
    When the selection has been made, <strong>take up references</strong> in
    respect of the successful candidate if asked to do so, and provide advice
    to the client on framing the offer of employment.
  </Fragment>,
  <Fragment>
    Upon completion of the assignment, remain in contact with the client and
    successful candidate to help with the on-boarding to ensure a successful
    outcome to the recruitment process for both parties.
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
