import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import Currency from './Currency'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Currency />)).toMatchSnapshot()
})
