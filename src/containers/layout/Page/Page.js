import { connect } from 'react-redux'

import { loadSuburbs } from '../../../actions/suburbs'
import Page from '../../../components/layout/Page'

export default connect(
  null,
  dispatch => {
    return {
      loadSuburbs: () => dispatch(loadSuburbs())
    }
  }
)(Page)
