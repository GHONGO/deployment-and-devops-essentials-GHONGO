import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import { apiRouter } from './v1/routes.js'

export function createApp () {
  const app = express()

  app.use(helmet())
  app.use(cors({ origin: '*'}))
  app.use(express.json())
  app.use(morgan('combined'))

  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
  })

  app.use('/api/v1', apiRouter)

  app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' })
  })

  // centralized error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.error('Unhandled error:', err)
    res.status(500).json({ error: 'Internal Server Error' })
  })

  return app
}


