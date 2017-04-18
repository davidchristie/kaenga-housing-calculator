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
            We build innovative, medium density homes. They come with exciting shared features that foster community and they are surprisingly affordable.
          </p>
          <p>
            We’ll tell you how much we expect your home will cost as you fill in this form. To get the most out of this, we suggest you adjust your home’s design so it fits your budget. You can use <a href='https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/' target='_blank'>ANZ’s calculator</a> to work out your budget.
          </p>
        </Panel>
      </div>
    )
  }
}

export default AboutSection
