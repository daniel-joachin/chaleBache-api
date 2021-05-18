import express from 'express'
import Pothole from '../models/pothole.js'
import DataSession from '../models/dataSession.js'

const router = express.Router()

router.post('/', async(req,res) => {
  try {
    const { name, lat, lng, firstIncident, lastIncident, numIncidents } = req.body
    if( !name ) {
      throw Error('Missing fields')
    }
    const pothole = await Pothole.create({
      name,
      lat,
      lng,
      firstIncident,
      lastIncident,
      numIncidents
    })
    res.json(
      pothole
    )
  } catch (error) {
    res.status(400)
    res.json({
      message: error.message
    })
  }
})

router.post('/batch', async(req,res) => {
  try {
    const { accelerometer, gyroscope } = req.body
    const data = await DataSession.create({
      accelerometer,
      gyroscope
    })
    res.json(
      data
    )
  } catch (error) {
    res.sendStatus(400)
  }
})

router.get('/', async(req,res) => {
  try {
    const potholes = await Pothole.find({})
    res.json(
      potholes
    )
  } catch (error) {
    res.status(404)
    .json({
      error: error.message
    })
  }
})

export default router
