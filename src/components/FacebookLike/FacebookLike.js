import React, { Component } from 'react'

export default class FacebookLike extends Component {
  render () {
    return (
      <div
        className='fb-like'
        data-share='true'
        data-show-faces='true'
        data-width='450'
      />
    )
  }
}
