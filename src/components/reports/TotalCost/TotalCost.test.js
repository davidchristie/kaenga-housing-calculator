import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import TotalCost from './TotalCost'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<TotalCost />)).toMatchSnapshot()
})
