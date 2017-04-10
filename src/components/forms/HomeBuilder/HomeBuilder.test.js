import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import HomeBuilder from './HomeBuilder'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<HomeBuilder />)).toMatchSnapshot()
})
