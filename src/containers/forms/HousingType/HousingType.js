import { reduxForm } from 'redux-form'

import HousingType from '../../../components/forms/HousingType'

export default reduxForm({
  destroyOnUnmount: false,
  form: 'housingType',
  initialValues: {
    type: ''
  }
})(HousingType)
