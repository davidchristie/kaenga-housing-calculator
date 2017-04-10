import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Occupants from './Occupants'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Occupants />)).toMatchSnapshot()
})
