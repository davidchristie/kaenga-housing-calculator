import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import SelectOne from './SelectOne'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<SelectOne />)).toMatchSnapshot()
})
