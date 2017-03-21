import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import App from './App'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<App />)).toMatchSnapshot()
})
