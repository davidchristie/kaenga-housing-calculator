import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Main from './Main'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Main />)).toMatchSnapshot()
})
