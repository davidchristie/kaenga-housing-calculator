import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

export default class Box extends Component {
  render () {
    console.log(this.props.style)
    return (
      <Panel
        style={{
          ...this.props.style,
          fontSize: '1.6em',
          textAlign: 'center'
        }}
      >
        {this.props.children}
      </Panel>
    )
  }
}
