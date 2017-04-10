import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import CheapestSuburb from './CheapestSuburb'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<CheapestSuburb />)).toMatchSnapshot()
})
