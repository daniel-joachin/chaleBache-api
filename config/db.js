import mongoose from 'mongoose'

const connection = async () => {
  try {
    const MONGO_URI="mongodb+srv://serviceUser:19mEccSsFE8R68cE@cluster0.o6w2p.mongodb.net/chalebache?retryWrites=true&w=majority"
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connection
