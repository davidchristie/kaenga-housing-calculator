import { getHobbies } from '../../../selectors/hobbies'
import { getHomeBuilderValues } from '../../../selectors/home-builder'
import { getSustainability } from '../../../selectors/sustainability'

export default [
  {
    condition: state => true,
    text: 'Onsite car share service'
  },
  {
    condition: state => true,
    text: 'Close to public transport'
  },
  {
    condition: state => getHomeBuilderValues(state).study,
    text: 'Shared guest studios'
  },
  {
    condition: state => getHobbies(state).sports,
    text: 'Plenty of storage for your sports equipment'
  },
  {
    condition: state => getHobbies(state).exercising,
    text: 'Onsite gym and yoga studio'
  },
  {
    condition: state => getHobbies(state).building,
    text: 'Communal workshop/makers space'
  },
  {
    condition: state => getHobbies(state).gardening,
    text: 'Roof top flower and vegie garden'
  },
  {
    condition: state => getHobbies(state).games,
    text: 'A communal games room'
  },
  {
    condition: state => getHobbies(state).reading,
    text: 'A communal study/reading room'
  },
  {
    condition: state => getHobbies(state).artMusic,
    text: 'A music room'
  },
  {
    condition: state => getHobbies(state).artMusic,
    text: 'An onsite artist studio'
  },
  {
    condition: state => getHobbies(state).socialising,
    text: 'Indoor and outdoor entertainment spaces with a high end kitchen and barbeque'
  },
  {
    condition: state => true,
    text: 'North facing, double glazing, solar water heating'
  },
  {
    condition: state => ['medium', 'high'].includes(getSustainability(state).level),
    text: 'Water Reticulation, etc.'
  },
  {
    condition: state => getSustainability(state).level === 'high',
    text: 'Photovoltaic panels, etc.'
  }
]
