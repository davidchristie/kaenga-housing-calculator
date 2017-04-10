import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import LivingSpace from './LivingSpace'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<LivingSpace />)).toMatchSnapshot()
})
