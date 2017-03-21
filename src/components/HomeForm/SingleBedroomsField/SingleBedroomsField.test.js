import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import SingleBedroomsField from './SingleBedroomsField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<SingleBedroomsField />)).toMatchSnapshot()
})
