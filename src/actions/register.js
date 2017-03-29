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
