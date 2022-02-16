const express = require('express')
const indexRouter = require('./routes/index.routes')
const cors = require('cors')
const config = require('./config/config')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(indexRouter)

app.listen(config.PORT)

app.use((err, req, res, next) => {
  if (!err.status) {
    err.status = 500
    err.message = 'Internal Server Error'
  }
  if (err.validationError) {
    return res.status(err.status).json(err.validationError)
  }

  res.status(err.status).json({ error: err.message })
})

module.exports = app
