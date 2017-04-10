import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Sustainability from './Sustainability'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Sustainability />)).toMatchSnapshot()
})
