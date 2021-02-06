import express from 'express'

const PORT = process.env.PORT || 4000
const app = express()

app.get('/', (req, res) => {
  res.send('Hello from server')
})

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`)
})