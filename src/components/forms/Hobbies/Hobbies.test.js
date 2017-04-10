import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Hobbies from './Hobbies'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Hobbies />)).toMatchSnapshot()
})
