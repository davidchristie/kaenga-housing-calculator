import axios from 'axios'

import comments from '../selectors/comments'
import design from '../selectors/design'
import exterior from '../selectors/exterior'
import interior from '../selectors/interior'
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
    const exteriorValues = exterior(state)
    const interiorValues = interior(state)
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
        'Interior: Cosy': interiorValues.cosy,
        'Interior: Indoor outdoor flow': interiorValues.flow,
        'Interior: Homely': interiorValues.homely,
        'Interior: Industrial': interiorValues.industrial,
        'Interior: Posh': interiorValues.posh,
        'Interior: Quirky': interiorValues.quirky,
        'Interior: Scandi': interiorValues.scandi
      },
      {
        'Exterior: Angular': exteriorValues.angular,
        'Exterior: Green': exteriorValues.green,
        'Exterior: Post modern': exteriorValues.postModern,
        'Exterior: Slick': exteriorValues.slick,
        'Exterior: Social': exteriorValues.social
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
        'Comments/Questions': comments(state).text,
        'Interested in project': comments(state).interestedInProject
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
