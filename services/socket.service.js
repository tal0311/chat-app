function socketService(server) {
  const { Server } = require('socket.io')
  const io = new Server(server)

  io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('chat-msg', (msg) => {
      console.log(msg)
    })
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })
}

module.exports = socketService
