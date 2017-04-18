import axios from 'axios'

import history from '../history'

export const hideRegisterForm = () => {
  return {
    type: 'HIDE_REGISTER_FORM'
  }
}

export const register = (values) => {
  return dispatch => {
    dispatch({type: 'REGISTER_PENDING'})

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
