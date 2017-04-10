import React, { Component } from 'react'
import { Button, Panel } from 'react-bootstrap'

class AboutSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render () {
    return (
      <div>
        <Button
          bsStyle='primary'
          onClick={() => this.setState({open: !this.state.open})}
        >
          Learn more
        </Button>
        <Panel collapsible expanded={this.state.open}>
          <p>
            We build innovative, community centric homes. These homes foster a sense of a community, coming with exciting features but are still surprisingly affordable.
          </p>
          <p>
            If you fill in this form, we’ll tell you how much a home built with us would cost.
          </p>
          <p>
            You’ll get the most out of this form if you approach it with a firm budget in mind. That way you can adjust your home’s design to fit your budget. You can use <a href='https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/' target='_blank'>ANZ’s calculator</a> to determine how much you might be able to borrow.
          </p>
        </Panel>
      </div>
    )
  }
}

export default AboutSection
