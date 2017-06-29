import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { getPriceRange } from '../../selectors/report'
import picture from './Noah-Fagan-portfolio-oct-14-7.jpg'

export class FacebookShare extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
        // description={`My ideal home would cost $${price.min}. What would yours?`}
    // picture={picture}
    // title='Kaenga Housing Calculator'
    // url='https://calculator.kaenga.com'
    const { price } = this.props
    window.FB.ui(
      {
        href: 'https://developers.facebook.com/docs/',
        method: 'share',
        message: `My ideal home would cost $${price.min}. What would yours?`,
        picture
      },
      response => {}
    )
  }

  render () {
    return (
      <Button
        onClick={this.handleClick}
        style={{
          backgroundColor: '#3b5998',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <img
          alt='Facebook icon'
          height={24}
          src='https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png'
          style={{
            marginLeft: -10,
            marginRight: 10,
            marginTop: -6
          }}
        />
        <span style={{verticalAlign: 'center'}}>
          Share to Facebook
        </span>
      </Button>
    )
  }
}

const withState = connect(
  state => ({
    price: getPriceRange(state)
  })
)

export default withState(FacebookShare)
