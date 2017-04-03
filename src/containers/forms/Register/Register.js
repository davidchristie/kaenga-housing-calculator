import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { register } from '../../../actions/register'
import Register from '../../../components/forms/Register'

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Must be 15 characters or less'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

export default connect(
  state => {
    const register = state.form.registry || {}
    return {
      values: register.values
    }
  },
  dispatch => {
    return {
      register: values => dispatch(register(values))
    }
  }
)(
  reduxForm({
    destroyOnUnmount: false,
    form: 'register',
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      phone: ''
    },
    validate
  })(Register)
)
