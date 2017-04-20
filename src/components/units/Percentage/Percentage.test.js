import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Percentage from './Percentage'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Percentage />)).toMatchSnapshot()
})
