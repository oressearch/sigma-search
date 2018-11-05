import {createContext} from 'react'

import {Country} from '../../functions/countries'

export interface Context {
  countries: Country[]
  status: 'FETCHING_COUNTRIES' | 'READY'
}

export const defaultContext = {
  countries: [],
  status: 'FETCHING_COUNTRIES',
} as Context

export default createContext(defaultContext)
