import React, { Component, PropTypes } from 'react'

import './Anchor.css'

class Anchor extends Component {
  render () {
    return (
      <div className='Anchor' id={this.props.id} />
    )
  }
}

Anchor.propTypes = {
  id: PropTypes.string
}

export default Anchor
