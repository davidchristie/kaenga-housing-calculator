import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import TextInput from './TextInput'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<TextInput />)).toMatchSnapshot()
})
