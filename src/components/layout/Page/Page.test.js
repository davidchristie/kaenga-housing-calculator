import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Page from './Page'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Page />)).toMatchSnapshot()
})
