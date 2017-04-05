import { reduxForm } from 'redux-form'

import HomeBuilder from '../../../components/forms/HomeBuilder'

export default reduxForm({
  destroyOnUnmount: false,
  form: 'homeBuilder'
})(HomeBuilder)
