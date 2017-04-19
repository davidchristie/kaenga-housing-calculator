import design from '../selectors/design'
import * as buildCost from '../selectors/build-cost'
import lifestyle from '../selectors/lifestyle'
import * as landCost from '../selectors/land-cost'
import sustainability from '../selectors/sustainability'

export default [
  {
    condition: state => true,
    cost: state => ({max: 0, min: 0}),
    text: 'Onsite car share service'
  },
  {
    condition: state => true,
    cost: state => ({max: 0, min: 0}),
    text: 'Close to public transport'
  },
  {
    condition: state => design(state).guestStudio,
    cost: state => {
      return {
        max: 2.5 * (buildCost.perSqm + landCost.getPerSqmRange(state).max),
        min: 2.5 * (buildCost.perSqm + landCost.getPerSqmRange(state).min)
      }
    },
    text: 'Shared guest studios'
  },
  {
    condition: state => lifestyle(state).sports,
    cost: state => ({max: 2000, min: 2000}),
    text: 'Plenty of storage for your sports equipment'
  },
  {
    condition: state => lifestyle(state).exercising,
    cost: state => {
      return {
        max: 2.5 * (buildCost.perSqm + landCost.getPerSqmRange(state).max),
        min: 2.5 * (buildCost.perSqm + landCost.getPerSqmRange(state).min)
      }
    },
    tags: ['multipurpose'],
    text: 'Onsite gym and yoga studio'
  },
  {
    condition: state => lifestyle(state).building,
    cost: state => {
      return {
        max: 1.2 * (buildCost.perSqm + landCost.getPerSqmRange(state).max),
        min: 1.2 * (buildCost.perSqm + landCost.getPerSqmRange(state).min)
      }
    },
    text: 'Communal workshop/makers space'
  },
  {
    condition: state => lifestyle(state).gardening,
    cost: state => ({max: 10000, min: 10000}),
    text: 'Roof top flower and vegie garden'
  },
  {
    condition: state => lifestyle(state).games,
    cost: state => {
      return {
        max: 2.5 * (buildCost.perSqm + landCost.getPerSqmRange(state).max),
        min: 2.5 * (buildCost.perSqm + landCost.getPerSqmRange(state).min)
      }
    },
    tags: ['multipurpose'],
    text: 'A communal games room'
  },
  {
    condition: state => lifestyle(state).reading,
    cost: state => {
      return {
        max: 2.5 * (buildCost.perSqm + landCost.getPerSqmRange(state).max),
        min: 2.5 * (buildCost.perSqm + landCost.getPerSqmRange(state).min)
      }
    },
    tags: ['multipurpose'],
    text: 'A communal study/reading room'
  },
  {
    condition: state => lifestyle(state).music,
    cost: state => {
      return {
        max: 2.5 * (buildCost.perSqm + landCost.getPerSqmRange(state).max),
        min: 2.5 * (buildCost.perSqm + landCost.getPerSqmRange(state).min)
      }
    },
    tags: ['multipurpose'],
    text: 'A music room'
  },
  {
    condition: state => lifestyle(state).art,
    cost: state => {
      return {
        max: 2.5 * (buildCost.perSqm + landCost.getPerSqmRange(state).max),
        min: 2.5 * (buildCost.perSqm + landCost.getPerSqmRange(state).min)
      }
    },
    tags: ['multipurpose'],
    text: 'An onsite artist studio'
  },
  {
    condition: state => lifestyle(state).socialising,
    cost: state => {
      return {
        max: 3.5 * (buildCost.perSqm + landCost.getPerSqmRange(state).max),
        min: 3.5 * (buildCost.perSqm + landCost.getPerSqmRange(state).min)
      }
    },
    text: 'Indoor and outdoor entertainment spaces with a high end kitchen and barbeque'
  },
  {
    condition: state => true,
    cost: state => ({max: 0, min: 0}),
    text: 'North facing, double glazing, solar water heating'
  },
  {
    condition: state => ['medium', 'high'].includes(sustainability(state).level),
    cost: state => ({max: 0, min: 0}),
    text: 'Water Reticulation, etc.'
  },
  {
    condition: state => sustainability(state).level === 'high',
    cost: state => ({max: 0, min: 0}),
    text: 'Photovoltaic panels, etc.'
  }
]
