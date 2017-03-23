import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import OccupantsForm from './OccupantsForm'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<OccupantsForm />)).toMatchSnapshot()
})
