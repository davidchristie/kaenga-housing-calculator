import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import TeenagersField from './TeenagersField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<TeenagersField />)).toMatchSnapshot()
})
