import moxios from 'moxios'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'
import { editRegistration } from './register'

const mockStore = configureStore([thunk])

describe('register', () => {
  beforeEach(function () {
    moxios.install()
  })

  afterEach(function () {
    moxios.uninstall()
  })

  test('editRegistration should dispatch action', () => {
    const store = mockStore(rootReducer)

    store.dispatch(editRegistration())

    const actions = store.getActions()
    const expectedPayload = { type: 'EDIT_REGISTRATION' }
    expect(actions).toEqual([expectedPayload])
  })
})
