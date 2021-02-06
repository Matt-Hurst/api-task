import express, { Request, Response} from 'express'
import { addCourierCtrl, removeCourierCtrl } from '../controller'


const router = express.Router()

router.post('/couriers', addCourierCtrl)

router.delete('/couriers', removeCourierCtrl)

router.put('/couriers', (req: Request, res: Response) => {
  res.send('edit couriers route')
})

router.get('/couriers/lookup', (req: Request, res: Response) => {
  res.send('get couriers with required capacity route')
})

export default router