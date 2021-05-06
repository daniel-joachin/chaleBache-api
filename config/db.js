import r from 'rethinkdb'
import dotenv from 'dotenv'
dotenv.config()

const db = async () => {
  try{
    const conn = await r.connect({
      host: process.env.RETHINKDB_HOST,
      port: process.env.RETHINKDB_PORT,
      db: process.env.RETHINKDB_NAME
    })
    
  } catch (error) {
    console.log(error.message);
    process.exit(1)
  }
}

export default db