import history from './history'

it('matches snapshot', () => {
  expect(history).toMatchSnapshot()
})
