import express from 'express'

import { config } from 'dotenv'

config()

import mongoose from 'mongoose'

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: 'real-estate',
  })
  .then(() => console.log('DB IS UP'))
  .catch((err) => console.log('DB ERROR ', err))

const app = express()

app.listen(3000, () => {
  console.log('server is running')
})
