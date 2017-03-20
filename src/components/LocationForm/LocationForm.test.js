import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import LocationForm from './LocationForm'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<LocationForm />)).toMatchSnapshot()
})
