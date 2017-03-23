import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import OccupantField from './OccupantField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<OccupantField />)).toMatchSnapshot()
})
