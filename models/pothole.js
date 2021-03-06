import mongoose from 'mongoose'

const potholeSchema = mongoose.Schema({
  name: String,
  lat: Number,
  lng: {
    type: Number
  },
  firstIncident: Date,
  lastIncident: Date,
  numIncidents: Number
}, {
  timestamps: true
})

const Pothole = mongoose.model('Pothole', potholeSchema)

export default Pothole