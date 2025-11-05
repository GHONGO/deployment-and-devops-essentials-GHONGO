import dotenv from 'dotenv'
import http from 'http'
import { createApp } from './server.js'
import { connectToDatabase } from './lib/mongo.js'

dotenv.config()

const port = process.env.PORT || 4000

async function start () {
  await connectToDatabase()
  const app = createApp()
  const server = http.createServer(app)
  server.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
  })
}

start().catch((err) => {
  console.error('Fatal startup error:', err)
  process.exit(1)
})


