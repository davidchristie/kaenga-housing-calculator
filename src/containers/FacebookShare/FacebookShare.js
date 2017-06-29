import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import roundCurrency from '../../models/roundCurrency'
import { getPriceRange } from '../../selectors/report'

export class FacebookShare extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const { price } = this.props
    const min = roundCurrency(price.min)
    const max = roundCurrency(price.max)
    const priceRange = `$${min}-${max}`
    window.FB.ui(
      {
        href: 'https://calculator.kaenga.com',
        method: 'share',
        quote: `My ideal home would cost ${priceRange}. What would yours?`
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
