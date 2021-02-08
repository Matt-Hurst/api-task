import express from 'express'
import { addCourierCtrl, editCourierCapacityCtrl, getCouriersWithCapacityCtrl, removeCourierCtrl } from '../controller'


const router = express.Router()

router.post('/couriers', addCourierCtrl)

router.delete('/couriers', removeCourierCtrl)

router.put('/couriers', editCourierCapacityCtrl)

router.get('/couriers/lookup', getCouriersWithCapacityCtrl)

export default router