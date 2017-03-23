import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import BathroomField from './BathroomField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<BathroomField />)).toMatchSnapshot()
})
