import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import ShowersField from './ShowersField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<ShowersField />)).toMatchSnapshot()
})
