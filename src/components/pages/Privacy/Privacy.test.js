import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import Privacy from './Privacy'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Privacy />)).toMatchSnapshot()
})
