import React, { Component } from 'react'
import { Carousel, Well } from 'react-bootstrap'
import { connect } from 'react-redux'

import features from '../../../selectors/features'

class Features extends Component {
  render () {
    const { selected } = this.props
    return (
      <Well>
        <h2>Shared Features</h2>
        <Carousel>
          {selected.map((feature, index) => {
            return (
              <Carousel.Item className='Feature' key={index}>
                <div>
                  <img
                    alt='900x500'
                    height={500}
                    src={feature.image || 'http://placehold.it/900x500'}
                  />
                </div>
                <Carousel.Caption>
                  <h3>{feature.text}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
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
