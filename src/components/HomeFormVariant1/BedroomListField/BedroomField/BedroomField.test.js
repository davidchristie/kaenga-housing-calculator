import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import BedroomField from './BedroomField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<BedroomField />)).toMatchSnapshot()
})
