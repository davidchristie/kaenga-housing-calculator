import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import SectionMenu from './SectionMenu'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<SectionMenu />)).toMatchSnapshot()
})
