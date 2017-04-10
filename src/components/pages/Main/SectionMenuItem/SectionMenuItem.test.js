import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import SectionMenuItem from './SectionMenuItem'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<SectionMenuItem />)).toMatchSnapshot()
})
