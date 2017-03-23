import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import SquareMetres from './SquareMetres'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<SquareMetres />)).toMatchSnapshot()
})
