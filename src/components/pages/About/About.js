import React, { Component } from 'react'
import {
  Col,
  Grid,
  Jumbotron
} from 'react-bootstrap'

class About extends Component {
  render () {
    return (
      <Grid className='About'>
        <Col md={2} />
        <Col md={8}>
          <Jumbotron className='About-header'>
            <h1>About</h1>
            <p>
              New Zealand housing is expensive. Part of the reason for this is that lots of people want to live here which drives up land prices. There is nothing we can do about that.
            </p>
            <p>
              But another part of the problem is that New Zealanders aren’t very innovative when it comes to housing. We’re still building homes based around the quarter-acre dream, despite the fact that people’s tastes are changing and these homes aren’t affordable.
            </p>
            <p>
              If you fill in this form, we’ll tell you more about your ideal home and provide suggestions for reducing your costs.
            </p>
            <p>
              You’ll get the most out of this form if you approach it with a firm budget in mind. That way you can adjust your home’s design to fit your budget. You can use <a href='https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/'>ANZ’s calculator</a> to determine how much you might be able to borrow.
            </p>
          </Jumbotron>
        </Col>
        <Col md={2} />
      </Grid>
    )
  }
}

export default About
