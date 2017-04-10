import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Item from './Item'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Item />)).toMatchSnapshot()
})
