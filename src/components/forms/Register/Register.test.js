import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Register from './Register'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Register />)).toMatchSnapshot()
})
