import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import Report from './Report'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Report />)).toMatchSnapshot()
})
