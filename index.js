const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

// SOCKET IO

const socketService = require('./services/socket.service')
socketService(server)

app.use(express.static('public'))
app.get('/', (req, res) => {})

server.listen(3000, () => {
  console.log('listening on http://localhost:3000/')
})
