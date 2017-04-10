import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Report from './Report'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Report />)).toMatchSnapshot()
})
