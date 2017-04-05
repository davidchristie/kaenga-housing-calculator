import { connect } from 'react-redux'

import { loadSuburbs } from '../../../actions/suburbs'
import Page from '../../../components/layout/Page'
import { getReport } from '../../../selectors/report'

export default connect(
  state => {
    return {
      totalCost: getReport(state).total
    }
  },
  dispatch => {
    return {
      loadSuburbs: () => dispatch(loadSuburbs())
    }
  }
)(Page)
