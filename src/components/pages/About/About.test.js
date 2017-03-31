import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import About from './About'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<About />)).toMatchSnapshot()
})
