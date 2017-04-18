import axios from 'axios'

import history from '../history'

export const hideRegisterForm = () => {
  return {
    type: 'HIDE_REGISTER_FORM'
  }
}

export const register = (values) => {
  return dispatch => {
    console.log(values)
    dispatch({type: 'REGISTER_PENDING'})

    var formBody = []
    for (var property in values) {
      var encodedKey = encodeURIComponent(property)
      var encodedValue = encodeURIComponent(values[property])
      formBody.push(encodedKey + '=' + encodedValue)
    }
    formBody = formBody.join('&')

    axios.post('http://api.kaenga.rakau.com/calculator/v1/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    }).then(response => console.log(response))

    dispatch(hideRegisterForm())
    dispatch({type: 'REGISTER_SUCCESS'})
    history.push('/report')
  }
}

export const showRegisterForm = () => {
  return {
    type: 'SHOW_REGISTER_FORM'
  }
}
