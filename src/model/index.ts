import mongoose, {Document} from 'mongoose'

export interface CourierInterface extends Document {
  id: string,
  max_capacity: number,
  current_capacity: number,
}

const courierSchema = new mongoose.Schema({
  id: String,
  max_capacity: Number,
  current_capacity: Number
})

const Courier = mongoose.model<CourierInterface>('Courier', courierSchema)

export default Courier