import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Anchor from './Anchor'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Anchor />)).toMatchSnapshot()
})
