import mongoose from 'mongoose'

let isConnected = false

export async function connectToDatabase () {
  if (isConnected) return
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MONGODB_URI is not set')
  }
  await mongoose.connect(uri, {
    minPoolSize: 5,
    maxPoolSize: 20
  })
  isConnected = true
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err)
  })
}


