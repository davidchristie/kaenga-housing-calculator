import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import HousingType from './HousingType'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<HousingType />)).toMatchSnapshot()
})
