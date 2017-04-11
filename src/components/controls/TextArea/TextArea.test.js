import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import TextArea from './TextArea'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<TextArea />)).toMatchSnapshot()
})
