import { connect } from 'react-redux'

import Report from '../../../components/reports/TotalCost'
import { getReport } from '../../../selectors/report'

export default connect(
  state => {
    return {
      ...getReport(state)
    }
  }
)(Report)
