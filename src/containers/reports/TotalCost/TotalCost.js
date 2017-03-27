import { connect } from 'react-redux'

import TotalCost from '../../../components/reports/TotalCost'
import { getReport } from '../../../selectors/report'

export default connect(
  state => {
    return {
      ...getReport(state)
    }
  }
)(TotalCost)
