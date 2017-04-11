import React, { Component } from 'react'
import { Carousel, Well } from 'react-bootstrap'

import design1 from './Noah-Fagan-portfolio-oct-14-4.jpg'
import design2 from './Noah-Fagan-portfolio-oct-14-5.jpg'
import design3 from './Noah-Fagan-portfolio-oct-14-6.jpg'
import design4 from './Noah-Fagan-portfolio-oct-14-7.jpg'

class OurDesigns extends Component {
  render () {
    return (
      <Well>
        <h2>Our Designs</h2>
        <Carousel>
          <Carousel.Item>
            <img alt='Design 1' src={design1} />
          </Carousel.Item>
          <Carousel.Item>
            <img alt='Design 2' src={design2} />
          </Carousel.Item>
          <Carousel.Item>
            <img alt='Design 3' src={design3} />
          </Carousel.Item>
          <Carousel.Item>
            <img alt='Design 4' src={design4} />
          </Carousel.Item>
        </Carousel>
      </Well>
    )
  }
}

export default OurDesigns
