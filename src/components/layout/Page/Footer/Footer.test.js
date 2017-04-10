import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Footer from './Footer'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Footer />)).toMatchSnapshot()
})
