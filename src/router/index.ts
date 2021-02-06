import express, { Request, Response} from 'express'

const router = express.Router()

router.post('/couriers', (req: Request, res: Response) => {
  res.send('create couriers route')
})

router.delete('/couriers', (req: Request, res: Response) => {
  res.send('delete couriers route')
})

router.put('/couriers', (req: Request, res: Response) => {
  res.send('edit couriers route')
})

router.get('/couriers/lookup', (req: Request, res: Response) => {
  res.send('get couriers with required capacity route')
})

export default router