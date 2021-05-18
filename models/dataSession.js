import mongoose from 'mongoose'

const dataSessionSchema = mongoose.Schema({
  accelerometer: [Number],
  gyroscope: [Number]
}, {
  timestamps: true
})

const DataSession = mongoose.model('DataSession', dataSessionSchema)

export default DataSession
