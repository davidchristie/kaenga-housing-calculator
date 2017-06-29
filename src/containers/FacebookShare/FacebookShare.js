import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { ShareButtons } from 'react-share'

import { getPriceRange } from '../../selectors/report'
import picture from './Noah-Fagan-portfolio-oct-14-7.jpg'

const { FacebookShareButton } = ShareButtons

export class FacebookShare extends Component {
  render () {
    const { price } = this.props
    return (
      <Button
        style={{
          backgroundColor: '#3b5998',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <FacebookShareButton
          description={`My ideal home would cost $${price.min}. What would yours?`}
          picture={picture}
          title='Kaenga Housing Calculator'
          url='https://calculator.kaenga.com'
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
        </FacebookShareButton>
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
