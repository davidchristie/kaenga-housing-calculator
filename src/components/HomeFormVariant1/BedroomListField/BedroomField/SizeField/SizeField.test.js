import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import SizeField from './SizeField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<SizeField />)).toMatchSnapshot()
})
