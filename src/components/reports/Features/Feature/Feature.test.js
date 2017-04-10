import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Feature from './Feature'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Feature />)).toMatchSnapshot()
})
