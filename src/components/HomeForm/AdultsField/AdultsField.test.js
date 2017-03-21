import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'

import AdultsField from './AdultsField'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(shallowRenderer.render(<AdultsField />)).toMatchSnapshot()
})
