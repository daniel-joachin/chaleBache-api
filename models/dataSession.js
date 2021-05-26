import mongoose from 'mongoose'

const dataSessionSchema = mongoose.Schema({
  accelerometer: [mongoose.Schema.Types.Mixed],
  gyroscope: [mongoose.Schema.Types.Mixed]
}, {
  timestamps: true
})

const DataSession = mongoose.model('DataSession', dataSessionSchema)

export default DataSession
