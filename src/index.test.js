it('runs without errors', () => {
  const root = document.createElement('div')
  root.id = 'root'
  document.body.appendChild(root)
  require('./index')
})
