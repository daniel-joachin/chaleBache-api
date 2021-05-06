import express from 'express'
import db from '../models/index.js'

const router = express.Router()

router.post('/', async(req,res) => {
  try {
    const { name, location } = req.body
    if( !name || !location ) {
      throw Error('Missing fields')
    }
    const pothole = new db.Pothole({
      name,
      location
    })
    res.json(
      await pothole.save()
    )
  } catch (error) {
    res.status(500)
    res.json({
      message: error.message
    })
  }
})

export default router
