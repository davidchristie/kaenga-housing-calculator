import { reduxForm } from 'redux-form'

import Transport from '../../../components/forms/Transport'

export default reduxForm({
  destroyOnUnmount: false,
  form: 'transport'
})(Transport)
