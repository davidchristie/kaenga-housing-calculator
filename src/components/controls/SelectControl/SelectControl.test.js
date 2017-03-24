import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import SelectControl from './SelectControl'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<SelectControl />)).toMatchSnapshot()
})
