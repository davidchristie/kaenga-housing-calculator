import axios from 'axios'

import history from '../history'
import comments from '../selectors/comments'
import design from '../selectors/design'
import housing from '../selectors/housing-type'
import lifestyle from '../selectors/lifestyle'
import location from '../selectors/location'
import register from '../selectors/register'
import { getSelectedSuburbs } from '../selectors/suburbs'
import sustainability from '../selectors/sustainability'
import transport from '../selectors/transport'

export const hideRegisterForm = () => {
  return {
    type: 'HIDE_REGISTER_FORM'
  }
}

export const postRegistration = () => {
  return (dispatch, getState) => {
    dispatch({type: 'REGISTER_PENDING'})

    const state = getState()

    const designValues = design(state)
    const housingValues = housing(state)
    const lifestyleValues = lifestyle(state)
    const locationValues = location(state)
    const registerValues = register(state)
    const sustainabilityValues = sustainability(state)
    const transportValues = transport(state)

    const values = {}

    Object.assign(
      values,
      {
        'email': registerValues.email,
        'firstName': registerValues.firstName,
        'lastName': registerValues.lastName,
        'phone': registerValues.phone
      },
      {
        'Bathrooms': designValues.bathrooms,
        'Bedrooms': designValues.bedrooms,
        'Guest studio': designValues.guestStudio,
        'Occupants': designValues.occupants
      },
      {
        'City': locationValues.city,
        'Commute time': locationValues.commute.join(', '),
        'Region': locationValues.region.join(', '),
        'Suburbs': getSelectedSuburbs(state)
          .map(suburb => suburb.name)
          .join(', ')
      },
      {
        'Housing type': housingValues.type
      },
      {
        'Sustainability': sustainabilityValues.level
      },
      {
        'Getting to work': transportValues.commute,
        'Need a car': transportValues.needCar
      },
      {
        'Sports': lifestyleValues.sports,
        'Gardening': lifestyleValues.gardening,
        'Building': lifestyleValues.building,
        'Reading': lifestyleValues.reading,
        'Socialising': lifestyleValues.socialising,
        'Exercising': lifestyleValues.exercising,
        'Games': lifestyleValues.games,
        'Art': lifestyleValues.art,
        'Music': lifestyleValues.music,
        'Other lifestyle': lifestyleValues.other
      },
      {
        'Comments/Questions': comments(state).text
      }
    )

    const formFields = []
    for (const property in values) {
      const encodedKey = encodeURIComponent(property)
      const encodedValue = encodeURIComponent(values[property])
      formFields.push(encodedKey + '=' + encodedValue)
    }
    const formBody = formFields.join('&')

    axios.post('http://api.kaenga.rakau.com/calculator/v1/', formBody)
      .then(response => {
        dispatch(hideRegisterForm())
        dispatch({type: 'REGISTER_SUCCESS'})
        history.push('/report')
      })
      .catch(error => {
        dispatch({
          message: error.message,
          type: 'REGISTER_FAILURE'
        })
      })
  }
}

export const showRegisterForm = () => {
  return {
    type: 'SHOW_REGISTER_FORM'
  }
}
