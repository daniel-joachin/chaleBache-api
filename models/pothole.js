import thinky from '../config/thinky.js'

const type = thinky.type
const r = thinky.r

const Pothole = thinky.createModel('Pothole', {
  id: type.string().default(r.uuid()),
  name: type.string(),
  location: {
    latitude: type.number(),
    longitud: type.number()
  },
  createdAt: type.date().default(r.now())
})

export default Pothole