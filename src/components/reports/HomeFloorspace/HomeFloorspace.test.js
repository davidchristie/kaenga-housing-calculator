import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import HomeFloorspace from './HomeFloorspace'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<HomeFloorspace />)).toMatchSnapshot()
})