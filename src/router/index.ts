import express from 'express'

const router = express.Router()

router.post('/couriers', (req, res) => {
  res.send('create couriers route')
})

router.delete('/couriers', (req, res) => {
  res.send('delete couriers route')
})

router.put('/couriers', (req, res) => {
  res.send('edit couriers route')
})

router.get('/couriers/lookup', (req, res) => {
  res.send('get couriers with required capacity route')
})

export default router