import { Request, Response } from 'express'
import Courier, { CourierInterface } from '../model'

const addCourierCtrl = async (req: Request, res: Response) => {
  try {
    const { id, max_capacity } = req.body
    if (!id || !max_capacity) throw new Error()
    const newCourier = new Courier({
      id,
      max_capacity,
      current_capacity: max_capacity
    })
    await newCourier.save((err: any) => {
      if (err) return console.error(err)
    })
    res.sendStatus(201)
  } catch (error) {
    res.status(400).send('Unable to create courier')
  }
}

const removeCourierCtrl = async (req: Request, res: Response) => {
  try {
    const { id } = req.body
    if (!id) throw new Error('No courier id provided')
    const { deletedCount } = await Courier.deleteOne({ id })
    if (deletedCount === 0) throw new Error(`No courier with id: ${id} found`)
    else res.send(`Courier id: ${id} deleted`)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const editCourierCapacityCtrl = async (req: Request, res: Response) => {
  try {
    const { id, new_capacity } = req.body
    if (!id || !new_capacity) throw new Error('No courier id or new_capacity provided')
    await Courier.findOneAndUpdate({ id }, { current_capacity: new_capacity})
    res.send(`Courier current_capacity updated. New capacity for courier id: ${id} = ${new_capacity}`)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const getCouriersWithCapacityCtrl = async (req: Request, res: Response) => {
  try {
    const { capacity_required } = req.body
    const result = await Courier.find({ current_capacity: { $gte: capacity_required }})
    if (!result.length) throw new Error('No couriers have required capacity')
    res.send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}


export { addCourierCtrl, removeCourierCtrl, editCourierCapacityCtrl, getCouriersWithCapacityCtrl }