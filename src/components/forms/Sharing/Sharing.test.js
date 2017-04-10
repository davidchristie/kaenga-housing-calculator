import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import Sharing from './Sharing'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<Sharing />)).toMatchSnapshot()
})
