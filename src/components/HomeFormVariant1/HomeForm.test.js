import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import HomeForm from './HomeForm'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<HomeForm />)).toMatchSnapshot()
})
