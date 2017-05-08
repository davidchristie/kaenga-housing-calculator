import React, { Component } from 'react'
import { Grid, ListGroup, Well } from 'react-bootstrap'
import { connect } from 'react-redux'

import features from '../../../selectors/features'
import Feature from './Feature'

class Features extends Component {
  render () {
    const { selected } = this.props
    return (
      <Well>
        <Grid>
          <h2>Shared Features</h2>
          <ListGroup>
            {selected.map((feature, index) => {
              return <Feature key={index} {...feature} />
            })}
          </ListGroup>
        </Grid>
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
