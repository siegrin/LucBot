const express = require('express')
const axios = require('axios')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8000)
