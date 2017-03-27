import { connect } from 'react-redux'

import LivingSpace from '../../../components/reports/LivingSpace'
import { getLivingSpace } from '../../../selectors/living-space'

export default connect(
  state => {
    const livingSpace = getLivingSpace(state)
    return {
      ...livingSpace
    }
  }
)(LivingSpace)
