import express from 'express'
import { addCourierCtrl, editCourierCtrl, getCouriersWithCapacityCtrl, removeCourierCtrl } from '../controller'


const router = express.Router()

router.post('/couriers', addCourierCtrl)

router.delete('/couriers', removeCourierCtrl)

router.put('/couriers', editCourierCtrl)

router.get('/couriers/lookup', getCouriersWithCapacityCtrl)

export default router