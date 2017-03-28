import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import Footer from './Footer'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Footer />)).toMatchSnapshot()
})
