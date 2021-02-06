import express from 'express'
import cors from 'cors'
import router from './router'
import mongoose from 'mongoose'


const PORT = process.env.PORT || 4000

const app = express()

//TODO: set up Stuart API and Dispatcher as trusted origins
app.use(cors())
app.use(router)

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('Connected to database')
})

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`)
})