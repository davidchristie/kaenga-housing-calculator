import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'

import ItemList from './ItemList'

const shallowRenderer = ReactTestUtils.createRenderer()

it('matches snapshot', () => {
  expect(
    shallowRenderer.render(<ItemList />)
  ).toMatchSnapshot()
})
