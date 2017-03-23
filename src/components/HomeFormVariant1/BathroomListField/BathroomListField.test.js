import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import BathroomListField from './BathroomListField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(
    shallowRenderer.render(<BathroomListField />)
  ).toMatchSnapshot()
})
