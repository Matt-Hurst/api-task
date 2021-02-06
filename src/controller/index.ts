import { Request, Response } from 'express'
import Courier from '../model'

const addCourierCtrl = async (req: Request, res: Response) => {
  try {
    const { id, max_capacity } = req.body
    if (!id || !max_capacity) throw new Error()
    const newCourier = new Courier({
      id,
      max_capacity,
      current_capacity: max_capacity
    })
    await newCourier.save(err => {
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


export { addCourierCtrl, removeCourierCtrl }