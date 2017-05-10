import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import IntegerInput from './IntegerInput'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(
    <IntegerInput />
  )).toMatchSnapshot()
})
