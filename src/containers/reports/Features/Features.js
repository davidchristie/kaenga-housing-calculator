import React, { Component } from 'react'
import { ListGroup, Well } from 'react-bootstrap'
import { connect } from 'react-redux'

import features from '../../../selectors/features'
import Feature from './Feature'

class Features extends Component {
  render () {
    const { selected } = this.props
    return (
      <Well>
        <h2>Shared Features</h2>
        <ListGroup>
          {selected.map((feature, index) => {
            return <Feature key={index} {...feature} />
          })}
        </ListGroup>
      </Well>
    )
  }
}

export default connect(
  state => {
    return {
      selected: features(state).selected
    }
  }
)(Features)
