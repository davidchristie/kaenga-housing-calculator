import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import EntertainmentField from './EntertainmentField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<EntertainmentField />)).toMatchSnapshot()
})
