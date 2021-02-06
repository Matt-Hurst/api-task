import express from 'express'
import cors from 'cors'
import router from './router'

const PORT = process.env.PORT || 4000

const app = express()

//TODO: set up Stuart API and Dispatcher as trusted origins
app.use(cors())
app.use(router)

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`)
})