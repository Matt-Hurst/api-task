import express from 'express'
import cors from 'cors'
import router from './router'

const createServer = () => {
  const app = express()
  //TODO: set up Stuart API and Dispatcher as trusted origins
  app.use(cors())
  app.use(express.json())
  app.use(router)
  return app
}

export default createServer