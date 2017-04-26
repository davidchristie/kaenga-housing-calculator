import comments from './comments'

it('matches snapshot', () => {
  const state = {}
  expect(comments(state)).toMatchSnapshot()
})
