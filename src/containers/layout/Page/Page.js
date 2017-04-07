import { connect } from 'react-redux'

import { loadSuburbs } from '../../../actions/suburbs'
import Page from '../../../components/layout/Page'
import { getReport } from '../../../selectors/report'

export default connect(
  state => {
    return {
      range: getReport(state).range
    }
  },
  dispatch => {
    return {
      loadSuburbs: () => dispatch(loadSuburbs())
    }
  }
)(Page)
