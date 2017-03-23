import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import AgeField from './AgeField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<AgeField />)).toMatchSnapshot()
})
