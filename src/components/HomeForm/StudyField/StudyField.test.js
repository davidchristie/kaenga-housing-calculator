import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import StudyField from './StudyField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<StudyField />)).toMatchSnapshot()
})
