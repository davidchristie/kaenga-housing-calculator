import React from 'react'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'

import Overview from './Overview'

const mockStore = configureStore()

it('matches snapshot', () => {
  const store = mockStore({
    suburbs: []
  })
  const tree = renderer.create(
    <IntlProvider locale='en'>
      <Provider store={store}>
        <Overview />
      </Provider>
    </IntlProvider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
