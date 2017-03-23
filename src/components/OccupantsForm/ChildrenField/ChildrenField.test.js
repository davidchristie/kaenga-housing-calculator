import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import ChildrenField from './ChildrenField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<ChildrenField />)).toMatchSnapshot()
})
