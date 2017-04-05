import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import Location from '../../../components/forms/Location'
import { getSuburbs } from '../../../selectors/suburbs'

export default connect(
  state => {
    return {
      suburbs: getSuburbs(state)
    }
  }
)(
  reduxForm({
    destroyOnUnmount: false,
    form: 'location',
    initialValues: {
      commute: [],
      region: [],
      suburbs: []
    }
  })(Location)
)
