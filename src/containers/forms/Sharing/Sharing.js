import { reduxForm } from 'redux-form'

import Sharing from '../../../components/forms/Sharing'

export default reduxForm({
  destroyOnUnmount: false,
  form: 'sharing'
})(Sharing)
