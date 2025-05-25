import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'

// Load env variables
dotenv.config()

const app = express()

app.use(helmet())
app.use(
  cors({
    origin: ['http://localhost:3000'], 
    credentials: true
  })
)
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))
app.disable('x-powered-by') // ẩn công nghệ

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests, please try again later.'
})
app.use(limiter)

app.get('/', (_req, res) => {
  res.send('Backend is running!')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`)
})
