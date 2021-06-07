const express = require('express')
const app = express()
const cors = require('cors')

const { initializeDB } = require('./db/db.connect.js')
const { errorHandler, routeNotFound } = require('./middlewares/index')

const PORT = process.env.PORT || 3030

//connection to DB
initializeDB()

app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
  response.send('Welcome to Fit-Tube REST Api!')
})

// Don't move it
// Keep at end to handle errors and 404s

app.use(routeNotFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log('server started on port: ', PORT)
})
