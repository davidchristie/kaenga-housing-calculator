import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import RegisterModal from './RegisterModal'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<RegisterModal />)).toMatchSnapshot()
})
