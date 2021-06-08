import express from 'express'
import mongoose from 'mongoose'
import faker from 'faker'
import Pothole from '../models/pothole.js'
import DataSession from '../models/dataSession.js'

const router = express.Router()
faker.locale = "es_MX"
router.post('/', async(req,res) => {
  try {
    const { locations } = req.body
    for(const location of locations){
      await Pothole.create({
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        lat:location.lat,
        lng:location.long,
        firstIncident: Date(),
        lastIncident: Date(),
        numIncidents: faker.datatype.number()
      })
    }
    res.sendStatus(200)
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

router.get('/batch', async(req,res) => {
  try {
    const data = await DataSession.find({})
    res.json(
      data
    )
  } catch (error) {
    res.sendStatus(404)
  }
})

router.get('/', async(req,res) => {
  try {
    const potholes = await Pothole.find({})
    res.status(200).
    json(
      potholes
    )
  } catch (error) {
    res.status(404)
    .json({
      error: error.message
    })
  }
})


router.delete('/:id',async(req,res)=>{
  try {
    const id = mongoose.Types.ObjectId(req.params.id)
    const pothole = await Pothole.deleteOne({
      _id: id
    })
    res.status(200)
  } catch (error) {
    res.status(404)
    .json({
      error: error.message
    })
  }
})



export default router
