import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import LivingSpaceField from './LivingSpaceField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<LivingSpaceField />)).toMatchSnapshot()
})
