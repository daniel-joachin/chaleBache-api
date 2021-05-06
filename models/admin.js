import bcrypt from 'bcryptjs'
import thinky from '../config/thinky.js'

const type = thinky.type
const r = thinky.r

const Admin = thinky.createModel('Admin', {
  id: type.string().default(r.uuid()),
  email: type.string().email(),
  password: type.string().min(5),
  name: type.string(),
  lastName: type.string()
})

Admin.define('comparePassword', async function(enteredPassword) {
  const self = this

  return await bcrypt.compare(enteredPassword, self.password)
})

export default Admin