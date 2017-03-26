import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import Home from './Home'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Home />)).toMatchSnapshot()
})
