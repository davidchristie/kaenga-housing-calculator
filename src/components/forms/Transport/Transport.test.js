import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Transport from './Transport'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Transport />)).toMatchSnapshot()
})
