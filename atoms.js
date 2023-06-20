import { atom } from 'recoil'

export const WEATHERSTATE = atom({ key: 'WEATHERSTATE', default: {} })

export const QUERYSTATE = atom({ key: 'QUERYSTATE', default: '' })

export const FORECASTSTATE = atom({ key: 'FORECASTSTATE', default: [] })
