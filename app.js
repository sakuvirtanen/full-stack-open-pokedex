const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  throw new Error('This should fail my pipeline')
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('Exercise 11.11 v1')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
