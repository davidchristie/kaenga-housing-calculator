import { getHobbies } from '../../../selectors/hobbies'
import { getHomeBuilderValues } from '../../../selectors/home-builder'

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
    condition: state => true,
    text: 'Plenty of storage for your sports equipment'
  },
  {
    condition: state => getHobbies(state).exercise,
    text: 'Onsite gym and yoga studio'
  },
  {
    condition: state => true,
    text: 'Communal workshop/makers space'
  },
  {
    condition: state => getHobbies(state).gardening,
    text: 'Roof top flower and vegie garden'
  },
  {
    condition: state => true,
    text: 'A communal games room'
  },
  {
    condition: state => true,
    text: 'A communal study/reading room'
  },
  {
    condition: state => true,
    text: 'A music room'
  },
  {
    condition: state => true,
    text: 'An onsite artist studio'
  },
  {
    condition: state => true,
    text: 'Indoor and outdoor entertainment spaces with a high end kitchen and barbeque'
  },
  {
    condition: state => true,
    text: 'North facing, double glazing, solar water heating'
  },
  {
    condition: state => true,
    text: 'Water Reticulation, etc.'
  },
  {
    condition: state => true,
    text: 'Photovoltaic panels, triple glazing, etc.'
  }
]
