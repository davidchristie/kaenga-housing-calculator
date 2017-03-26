import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import Area from './Area'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Area />)).toMatchSnapshot()
})
