import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Location from './Location'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Location />)).toMatchSnapshot()
})
