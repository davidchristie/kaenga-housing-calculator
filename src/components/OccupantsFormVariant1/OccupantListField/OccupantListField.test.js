import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import OccupantListField from './OccupantListField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(
    shallowRenderer.render(<OccupantListField />)
  ).toMatchSnapshot()
})
