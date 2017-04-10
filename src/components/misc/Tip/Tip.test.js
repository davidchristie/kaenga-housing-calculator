import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Tip from './Tip'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Tip />)).toMatchSnapshot()
})
