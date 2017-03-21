import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import GuestRoomsField from './GuestRoomsField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<GuestRoomsField />)).toMatchSnapshot()
})
