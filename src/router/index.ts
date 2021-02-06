import express, { Request, Response} from 'express'
import { addCourierCtrl, editCourierCtrl, removeCourierCtrl } from '../controller'


const router = express.Router()

router.post('/couriers', addCourierCtrl)

router.delete('/couriers', removeCourierCtrl)

router.put('/couriers', editCourierCtrl)

router.get('/couriers/lookup', (req: Request, res: Response) => {
  res.send('get couriers with required capacity route')
})

export default router