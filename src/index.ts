import mongoose from 'mongoose'
import createServer from './server'


const PORT = process.env.PORT || 4000

const app = createServer()

mongoose.connect('mongodb://localhost:27017/couriers', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useFindAndModify', false)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('Connected to database')
})

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`)
})