import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import NumberInput from './NumberInput'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(
    <NumberInput />
  )).toMatchSnapshot()
})
