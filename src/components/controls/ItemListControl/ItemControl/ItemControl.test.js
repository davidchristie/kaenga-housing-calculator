import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import ItemControl from './ItemControl'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<ItemControl />)).toMatchSnapshot()
})
