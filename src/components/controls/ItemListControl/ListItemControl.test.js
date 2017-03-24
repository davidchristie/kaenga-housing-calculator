import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import ListItemControl from './ListItemControl'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(
    shallowRenderer.render(<ListItemControl />)
  ).toMatchSnapshot()
})
