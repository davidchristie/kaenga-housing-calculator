import store from './store'

it('matches snapshot', () => {
  expect(store).toMatchSnapshot()
})
