import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 4000

const app = express()

//TODO: set up Stuart API and Dispatcher as trusted origins
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello from server')
})

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`)
})