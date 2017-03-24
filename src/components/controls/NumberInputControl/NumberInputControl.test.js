import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import NumberInputControl from './NumberInputControl'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(
    <NumberInputControl />
  )).toMatchSnapshot()
})
