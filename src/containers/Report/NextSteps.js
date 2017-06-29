import React, { Component } from 'react'
import { Button, Grid, Panel } from 'react-bootstrap'

import FacebookShare from '../FacebookShare'

export default class NextSteps extends Component {
  render () {
    return (
      <Grid>
        <Panel>
          <h1>Next steps</h1>
          <p>
            We’ll email you shortly to discuss opportunities but until then why not spread the word to find others who would be interested in buying an affordable, sustainable and sociable home.
          </p>
          <hr />
          <FacebookShare />
          <hr />
          <a href='http://kaenga.com' target='_blank'><Button bsStyle='primary'>Learn more about us</Button></a>
        </Panel>
      </Grid>
    )
  }
}
