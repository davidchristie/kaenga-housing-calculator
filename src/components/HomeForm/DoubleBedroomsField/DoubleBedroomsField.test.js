import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import DoubleBedroomsField from './DoubleBedroomsField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<DoubleBedroomsField />)).toMatchSnapshot()
})
