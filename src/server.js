require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const store = require('./app/controllers/userController')


const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.post('/users', (req, res) => store(req, res))


app.listen(3333, () => {
    console.log('Server em 3333')
})
