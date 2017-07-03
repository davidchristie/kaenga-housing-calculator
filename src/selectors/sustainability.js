import values from './values'

function level (state) {
  switch (values(state).sustainability) {
    case 1:
      return 'low'

    case 2:
      return 'medium'

    case 3:
      return 'high'
  }
}

export default state => ({
  level: level(state)
})
