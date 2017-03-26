import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import BedroomFields from './BedroomFields'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<BedroomFields />)).toMatchSnapshot()
})
