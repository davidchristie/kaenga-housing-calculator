import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import BedroomListField from './BedroomListField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(
    shallowRenderer.render(<BedroomListField />)
  ).toMatchSnapshot()
})
