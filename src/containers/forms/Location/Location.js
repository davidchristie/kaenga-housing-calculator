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
    form: 'location',
    initialValues: {
      suburbs: []
    }
  })(Location)
)
