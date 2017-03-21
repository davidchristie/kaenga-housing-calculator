import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import SharingForm from './SharingForm'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<SharingForm />)).toMatchSnapshot()
})
