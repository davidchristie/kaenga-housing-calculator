import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import ToiletsField from './ToiletsField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<ToiletsField />)).toMatchSnapshot()
})
