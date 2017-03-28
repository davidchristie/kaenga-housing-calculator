import React, { Component } from 'react'
import { Col, Grid, Panel } from 'react-bootstrap'

class Footer extends Component {
  render () {
    return (
      <Grid>
        <Col md={2} />
        <Col md={8}>
          <Panel style={{textAlign: 'center'}}>
            <p>
              <strong>
                Images &copy; Noah Fagan
              </strong>
            </p>
          </Panel>
        </Col>
        <Col md={2} />
      </Grid>
    )
  }
}

export default Footer
