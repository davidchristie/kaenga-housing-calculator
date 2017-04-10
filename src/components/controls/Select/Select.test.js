import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Select from './Select'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Select />)).toMatchSnapshot()
})
