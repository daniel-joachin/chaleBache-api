import express from 'express'
import Admin from '../models/admin.js'

const router = express.Router()

router.post('/', async(req,res) =>{
  try {
    const {username, password} = req.body;
    if(!username || !password){
      throw new Error('User or Password missing!');
    }
    const admin = await Admin.create({username, password})
    res.json(admin)
  } catch (error) {
    res.json({message:error.message})
  }
})


router.post('/login', async(req,res) =>{
  try {
    const {username, password} = req.body;
    if(!username || !password){
      throw new Error('User or Password missing!');
    }
    const admin = await Admin.findOne({username, password})

    if(admin==null){
      throw new Error('Admin not found')

    }
    
    
    res.json(admin)
  } catch (error) {
    res.status(400)
    res.json({message:error.message})
  }
})

export default router