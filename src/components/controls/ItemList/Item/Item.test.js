import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import Item from './Item'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Item />)).toMatchSnapshot()
})
