import mongoose from 'mongoose'

const courierSchema = new mongoose.Schema({
  id: String,
  max_capacity: Number,
  current_capacity: Number
})

const Courier = mongoose.model('Courier', courierSchema)

export default Courier