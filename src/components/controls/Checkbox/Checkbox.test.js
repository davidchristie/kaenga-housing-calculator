import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Checkbox from './Checkbox'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Checkbox />)).toMatchSnapshot()
})
