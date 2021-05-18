import mongoose from 'mongoose'

const sensorsSchema = mongoose.Schema({
  accelerometer: [String],
  gyroscope: [String]
}, {
  timestamps: true
})

const Sensors = mongoose.model('Sensors', sensorsSchema)

export default Sensors
