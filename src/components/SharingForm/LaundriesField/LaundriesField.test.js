import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import LaundriesField from './LaundriesField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<LaundriesField />)).toMatchSnapshot()
})
