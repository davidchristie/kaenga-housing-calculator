import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import OurDesigns from './OurDesigns'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(
    <OurDesigns />
  )).toMatchSnapshot()
})
