import React, { Component, PropTypes } from 'react'
import { Well } from 'react-bootstrap'

class CheapestSuburb extends Component {
  render () {
    const style = this.props.visible ? {} : {display: 'none'}
    return (
      <Well style={style}>
        <h1>Cheapest suburb</h1>
        <p>
          Name: <strong>{this.props.name}</strong>
        </p>
      </Well>
    )
  }
}

CheapestSuburb.propTypes = {
  price: PropTypes.number,
  name: PropTypes.string
}

export default CheapestSuburb
