import { readSuburbsData } from './suburbs'

it('matches snapshot', done => {
  readSuburbsData(data => {
    expect(data).toMatchSnapshot()
    done()
  })
})
