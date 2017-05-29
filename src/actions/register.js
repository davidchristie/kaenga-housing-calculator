import axios from 'axios'

import comments from '../selectors/comments'
import design from '../selectors/design'
import housing from '../selectors/housing-type'
import lifestyle from '../selectors/lifestyle'
import location from '../selectors/location'
import register from '../selectors/register'
import { getSelectedSuburbs } from '../selectors/suburbs'
import sustainability from '../selectors/sustainability'
import transport from '../selectors/transport'
import valuesInputs from '../selectors/values'
import { scrollToElementId } from './scroll'

export const editRegistration = () => {
  return {
    type: 'EDIT_REGISTRATION'
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
    const valuesValues = valuesInputs(state)

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
        'Commute time': locationValues.commute,
        'Region': locationValues.region,
        'Suburbs': getSelectedSuburbs(state)
          .map(suburb => suburb.name)
          .join(', ')
      },
      {
        'Housing type: High rise': housingValues.highRise,
        'Housing type: Large scale apartment': housingValues.largeScaleApartment,
        'Housing type: Mid scale apartment': housingValues.midScaleApartment,
        'Housing type: Terraced housing': housingValues.terracedHousing
      },
      {
        'Sustainability': sustainabilityValues.level
      },
      {
        'Getting to work': transportValues.commute,
        'Need a car': transportValues.needCar
      },
      {
        'Values: Diversity': valuesValues.diversity,
        'Values: Lifestage': valuesValues.lifestage,
        'Values: Most important values': valuesValues.mostImportantValues,
        'Values: Multigenerational': valuesValues.multigenerational,
        'Values: Outdoors': valuesValues.outdoors,
        'Values: Shared space': valuesValues.sharedSpace,
        'Values: Time at home': valuesValues.timeAtHome
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

    return axios.post('https://api.kaenga.com/calculator/v1/', formBody)
      .then(response => {
        dispatch({
          data: state.form,
          type: 'REGISTER_SUCCESS'
        })
      })
      .then(() => {
        dispatch(scrollToElementId('results'))
      })
      .catch(error => {
        dispatch({
          message: error.message,
          type: 'REGISTER_FAILURE'
        })
      })
  }
}
