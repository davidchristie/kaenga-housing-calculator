import housingType from './housing-type'

it('matches snapshot', () => {
  const state = {}
  expect(housingType(state)).toMatchSnapshot()
})
