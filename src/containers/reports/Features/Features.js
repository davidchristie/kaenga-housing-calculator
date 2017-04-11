import React, { Component } from 'react'
import { ListGroup, Well } from 'react-bootstrap'
import { connect } from 'react-redux'

import Feature from './Feature'
import list from './list'

class Features extends Component {
  render () {
    const { features } = this.props
    return (
      <Well>
        <h2>Shared Features</h2>
        <ListGroup>
          {features.map((feature, index) => {
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
      features: list
        .filter(feature => feature.condition(state))
    }
  }
)(Features)
