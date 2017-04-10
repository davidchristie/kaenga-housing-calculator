import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { ListGroup, Well } from 'react-bootstrap'

import Feature from './Feature'

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

Features.defaultProps = {
  features: []
}

Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Features
