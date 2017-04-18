import design from '../selectors/design'
import { getHobbies } from '../selectors/hobbies'
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
    cost: state => ({max: 0, min: 0}),
    text: 'Shared guest studios'
  },
  {
    condition: state => getHobbies(state).sports,
    cost: state => ({max: 2000, min: 2000}),
    text: 'Plenty of storage for your sports equipment'
  },
  {
    condition: state => getHobbies(state).exercising,
    cost: state => ({max: 0, min: 0}),
    tags: ['multipurpose'],
    text: 'Onsite gym and yoga studio'
  },
  {
    condition: state => getHobbies(state).building,
    cost: state => ({max: 0, min: 0}),
    text: 'Communal workshop/makers space'
  },
  {
    condition: state => getHobbies(state).gardening,
    cost: state => ({max: 10000, min: 10000}),
    text: 'Roof top flower and vegie garden'
  },
  {
    condition: state => getHobbies(state).games,
    cost: state => ({max: 0, min: 0}),
    tags: ['multipurpose'],
    text: 'A communal games room'
  },
  {
    condition: state => getHobbies(state).reading,
    cost: state => ({max: 0, min: 0}),
    tags: ['multipurpose'],
    text: 'A communal study/reading room'
  },
  {
    condition: state => getHobbies(state).artMusic,
    cost: state => ({max: 0, min: 0}),
    tags: ['multipurpose'],
    text: 'A music room'
  },
  {
    condition: state => getHobbies(state).artMusic,
    cost: state => ({max: 0, min: 0}),
    tags: ['multipurpose'],
    text: 'An onsite artist studio'
  },
  {
    condition: state => getHobbies(state).socialising,
    cost: state => ({max: 0, min: 0}),
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
