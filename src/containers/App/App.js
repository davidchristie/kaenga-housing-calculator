import { connect } from 'react-redux'

import { loadSuburbs } from '../../actions/suburbs'
import App from '../../components/App'
import { getReport } from '../../selectors/report'

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
)(App)
