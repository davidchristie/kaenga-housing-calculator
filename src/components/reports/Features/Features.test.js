import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Features from './Features'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Features />)).toMatchSnapshot()
})
