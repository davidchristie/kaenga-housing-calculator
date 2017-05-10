import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

export default class Box extends Component {
  render () {
    return (
      <Panel
        style={{
          fontSize: '1.6em',
          textAlign: 'center'
        }}
      >
        {this.props.children}
      </Panel>
    )
  }
}
