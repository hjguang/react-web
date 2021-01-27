// Import express framework
const mongoose = require("mongoose");

const express = require('express')
// Import middleware
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')

const config = require("../config/config");
// const homeRouter = require('./routes/home-route')
const mediaRouter = require('./routes/media.route')

const app = express()
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(bodyParser.json())

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  app.get('*', (req, res) => {
    res.sendFile('build/index.html', {root: __dirname})
  })
}

// app.use('/', homeRouter)
app.use('/', mediaRouter)

// Implement route for errors
app.use((err, req, res, next) => {
  console.error(err.stack)

  res.status(500).send('Something broke!')
})

mongoose.connect(config.mongoUri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
  .then(() => {
    console.log("MongoDB connected successfully")
  })

// Start express app
app.listen(config.port, function () {
  console.log(`Server is running on: ${config.port}`)
})