import { reduxForm } from 'redux-form'

import Hobbies from '../../../components/forms/Hobbies'

export default reduxForm({
  destroyOnUnmount: false,
  form: 'hobbies'
})(Hobbies)
