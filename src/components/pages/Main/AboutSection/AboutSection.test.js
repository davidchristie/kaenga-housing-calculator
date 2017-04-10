import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import AboutSection from './AboutSection'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<AboutSection />)).toMatchSnapshot()
})
