import { connect } from 'react-redux'

import Features from '../../../components/reports/Features'

const features = [
  {
    condition: state => true,
    text: 'Onsite car share service'
  }
]

export default connect(
  state => {
    return {
      features: features
        .filter(feature => feature.condition(state))
    }
  }
)(Features)
