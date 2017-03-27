import { reduxForm } from 'redux-form'

import Occupants from '../../../components/forms/Occupants'

export default reduxForm({
  destroyOnUnmount: false,
  form: 'occupants'
})(Occupants)
