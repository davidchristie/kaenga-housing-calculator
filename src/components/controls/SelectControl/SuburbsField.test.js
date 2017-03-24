import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import SuburbsField from './SuburbsField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<SuburbsField />)).toMatchSnapshot()
})
