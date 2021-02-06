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
    res.send('Unable to create courier')
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
    res.send(error.message)
  }
}

const editCourierCtrl = async (req: Request, res: Response) => {
  try {
    const { id, capacity_change } = req.body
    if (!id || !capacity_change) throw new Error('No courier id or capacity_change provided')
    const result: CourierInterface[] = await Courier.find({ id })
    const new_capacity = result[0].current_capacity + capacity_change
    if (new_capacity < 0) throw new Error('courier overloaded')
    await Courier.findOneAndUpdate({ id }, { current_capacity: new_capacity})
    res.send(`Courier current_capacity updated. New capacity for courier id: ${id} = ${new_capacity}`)
  } catch (error) {
    res.send(error.message)
  }
}

const getCouriersWithCapacityCtrl = async (req: Request, res: Response) => {
  try {
    const { capacity_required } = req.body
    const result = await Courier.find({ current_capacity: { $gte: capacity_required }})
    if (!result.length) throw new Error('No couriers have required capacity')
    res.send(result)
  } catch (error) {
    res.send(error.message)
  }
}


export { addCourierCtrl, removeCourierCtrl, editCourierCtrl, getCouriersWithCapacityCtrl }