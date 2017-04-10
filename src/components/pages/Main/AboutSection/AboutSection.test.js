import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import AboutSection from './AboutSection'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<AboutSection />)).toMatchSnapshot()
})
