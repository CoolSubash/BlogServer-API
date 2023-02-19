const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authenticationroutes = require('./routers/authenticationroutes.js')
const postroutes = require('./routers/postroutes.js')
const updateroutes = require('./routers/updateroutes.js')
dotenv.config()
app.use(cors())
app.use(express.json())
mongoose.set('strictQuery', true)
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log('I am conneted to DataBase')
  })
  .catch((err) => {
    console.log('I am not connected to database')
  })

// Router For Login
app.use('/api/auth', authenticationroutes)
app.use('/api/postinfo', postroutes)
app.use('/api/user', updateroutes)
app.listen(port, () => {
  console.log(`I am connecting myself in ${port}. `)
})
