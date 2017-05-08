import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Info from './Info'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Info />)).toMatchSnapshot()
})
