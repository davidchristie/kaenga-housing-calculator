import React, { Component } from 'react'
import {
  Col,
  Grid,
  Jumbotron
} from 'react-bootstrap'

class Privacy extends Component {
  render () {
    return (
      <Grid className='Privacy'>
        <Col md={2} />
        <Col md={8}>
          <Jumbotron className='Privacy-header'>
            <h1>Privacy Statement</h1>
            <p>
              We collect personal information from you, including your name and contact information.
            </p>
            <p>
              We collect this information so that we can keep you informed about housing opportunities that might interest you.
            </p>
            <p>
              We also collect information about your housing preferences in order to help design homes that match your needs and to give you a chance to buy one of these homes before it is released to the market.
            </p>
            <p>
              Providing information about your housing preferences is optional, but if don't provide us this information, we won't be able design a home that meets your needs or give you a chance to buy this home before anyone else.
            </p>
            <p>
              You have the right to ask for a copy of any personal information we hold about you, and to ask for it to be corrected if you think it is wrong. If you’d like to ask for a copy of your information, or to have it corrected, please contact us at <a href='mailto:hello@kaenga.com'>hello@kaenga.com</a>.
            </p>
          </Jumbotron>
        </Col>
        <Col md={2} />
      </Grid>
    )
  }
}

export default Privacy
