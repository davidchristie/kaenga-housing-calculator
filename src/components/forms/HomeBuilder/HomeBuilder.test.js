import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import HomeBuilder from './HomeBuilder'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<HomeBuilder />)).toMatchSnapshot()
})
