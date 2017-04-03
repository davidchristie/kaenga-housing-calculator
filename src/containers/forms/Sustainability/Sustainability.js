import { reduxForm } from 'redux-form'

import Sharing from '../../../components/forms/Sustainability'

export default reduxForm({
  destroyOnUnmount: false,
  form: 'sustainability',
  initialValues: {
    level: 'low'
  }
})(Sharing)
